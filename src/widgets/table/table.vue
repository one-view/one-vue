<template>
    <div class="one-table">
        <table class="table-item" border="1">
            <thead>
                <tr>
                    <th v-if="showCheckbox" class="th-checkbox" key="checkbox">
                        <one-checkbox :showText="false" v-model="selectAll" @change="changeAll"></one-checkbox>
                    </th>
                    <th v-if="showIndex" key="index">
                        #
                    </th>
                    <th v-for="(item, index) in head" :style="{width: item.width ? `${item.width}px` : 'auto'}" :key="item.id||index">
                        <template v-if="item.type === 'action'">
                            <div>{{item.title}}</div>
                        </template>
                        <template v-else>
                            {{item.title}}
                        </template>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in dat" :key="`checkbox_${index}`">
                    <td v-if="showCheckbox" class="td-checkbox">
                        <one-checkbox :showText="false" v-model="item._SELECT" @change="(status) => {changeItem(item, status)}"></one-checkbox>
                    </td>
                    <td v-if="showIndex" class="td-index" :key="`index_${index}`">
                        {{item._INDEX}}
                    </td>
                    <td v-for="(it, i) in head" :key="`data_${item.id||i}`">
                        <render v-if="it.render" :row="item" :head="it" :index="i" :render="it.render"></render>
                        <template v-else-if="it.format">
                            {{it.format(item[it.key])}}
                        </template>
                        <template v-else>
                            <template v-if="it.type === 'link'">
                                <a target="_blank" :href="item[it.key]">
                                    {{limitTd(item[it.key], it.limit)}}
                                </a>
                            </template>
                            <template v-else-if="it.type === 'img'">
                                <div class="td-item-img">
                                    <a target="_blank" @click="viewImgClick(item[it.key])">图片</a>
                                    <div class="img-container" @click="viewImgClick(item[it.key])">
                                        <img :src="item[it.key]" alt="">
                                    </div>
                                </div>
                            </template>
                            <template v-else>
                                {{limitTd(item[it.key], it.limit)}}
                            </template>
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
        <one-modal :visible="!!viewImg" @close="viewImg = ''" class="img-model">
            <div slot="body" class="img-view">
                <img :src="viewImg">
            </div>
        </one-modal>
    </div>
</template>

<script>
    import render from './render.js'
    export default {
      name: 'one-table',
      components: {
        render
      },
      props: {
        head: {
          type: Array,
          default: () => []
        },
        data: {
          type: Array,
          default: () => []
        },
        showIndex: {
          type: Boolean,
          default: false
        },
        showCheckbox: {
          type: Boolean,
          default: false
        }
      },
      data () {
        return {
          // 预览图片
          viewImg: '',
          // 全选
          selectAll: false,
          // 清洗后的表格
          dat: [],
          // 被选中的数据
          selection: []
        }
      },
      watch: {
        data (val) {
          // 加工data
          const cloneData = JSON.parse(JSON.stringify(val))
          const privateData = cloneData.map((item, index) => {
            item._SELECT = false
            item._INDEX = index + 1
            return item
          })
          this.dat.length = 0
          this.dat.push(...privateData)
        }
      },
      computed: {
      },
      methods: {
        limitTd (tdItem, limit) {
          if (!tdItem) {
            return ''
          }
          if (!limit || tdItem.length <= limit) {
            return tdItem
          }
          return `${tdItem.substring(0, limit)}...`
        },
        changeAll (status) {
          if (status) {
            // 选中所有
            for (let i = 0; i < this.dat.length; i++) {
              const item = this.dat[i]
              item._SELECT = true
            }
            this.selection.length = 0
            this.selection.push(...this.dat)
            this.$emit('selectAll', this.selection)
          } else {
            // 取消所有
            for (let i = 0; i < this.dat.length; i++) {
              const item = this.dat[i]
              item._SELECT = false
            }
            this.selection.splice(0, this.selection.length)
            this.$emit('selectAllCancel')
          }
          this.$emit('selectAllChange', this.selection)
        },
        changeItem (item, status) {
          if (status) {
            // 判断是否已经全部选中
            let flag = true
            for (let i = 0; i < this.dat.length; i++) {
              const item = this.dat[i]
              if (!item._SELECT) {
                flag = false
                break
              }
            }
            this.selectAll = flag
            this.selection.push(item)
            this.$emit('selectItem', this.selection, item)
          } else {
            // 取消全选状态
            this.selectAll = false
            // 在选择项中取消取消项
            let index = -1
            for (let i = 0; i < this.selection; i++) {
              const it = this.selection[i]
              if (it._INDEX === item._INDEX) {
                index = it._INDEX
                break
              }
            }
            this.selection.splice(index, 1)
            this.$emit('selectItemCancel', this.selection, item)
          }
        },
        viewImgClick (val) {
          this.viewImg = val
        }
      },
      mounted () {
        // 加工data // try-catch
        const cloneData = JSON.parse(JSON.stringify(this.data))

        const privateData = cloneData.map((item, index) => {
          item._SELECT = false
          item._INDEX = index + 1
          return item
        })
        this.dat.length = 0
        this.dat.push(...privateData)
      }
    }
</script>
<style lang="less" scoped>
    .one-table{
        .img-model /deep/ {
            .one-modal-outer{
                text-align: center;
                .one-modal-container{
                    display: inline-block;
                }
            }
            .img-view{
                padding: 8px 10px;
                display: inline-block;
                text-align: center;
                img{
                    max-width: 1000px;
                    max-height: 600px;
                }
            }
        }

        .table-item{
            font-size: 14px;
            border: 1px solid #ddd;
            width: 100%;
            thead th{
                white-space: nowrap;
                overflow: hidden;
                user-select: none;
                text-align: left;
                padding: 12px 10px;
                min-width: 0;
                text-overflow: ellipsis;
                vertical-align: middle;
                position: relative;
                font-weight: 600;
                background-color: #f2f2f2;
                &.th-checkbox{
                    padding: 0 15px;
                    width: 50px;
                }
                border-bottom: 1px solid #ebeef5;
                border-right: 1px solid #ebeef5;
            }
            tbody {
                tr {
                    &:hover{
                        background-color: #f5f7fa;
                    }
                    td{
                        border-bottom: 1px solid #ebeef5;
                        border-right: 1px solid #ebeef5;
                        &.td-index {
                            padding: 0 10px;
                        }
                        &.td-checkbox{
                            padding: 0 15px;
                            width: 40px;
                        }
                        word-break: break-all;
                        padding: 20px 10px;
                        .td-item-img{
                            position: relative;
                            a{
                            }
                            .img-container{
                                cursor: pointer;
                                display: none;
                                position: absolute;
                                top:20px;
                                z-index: 19920808;
                                background: #fff;
                                border-radius: 3px;
                                border: 1px solid #ebeef5;
                                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                                padding: 6px 8px 2px 8px;
                                img {
                                    cursor: pointer;
                                    max-height: 120px;
                                    max-width: 200px;
                                }
                            }
                            &:hover{
                                .img-container{
                                    display: block;
                                }
                            }
                        }
                    }
                }
            }
        }
        line-height: 18px;
        a{
            cursor: pointer;
        }
        span.text-title {
            color: black;
        }
        .text-top{
            background-color: #ffb21b;
        }
        .text-best{
            background-color: #ff8888;
        }
    }
</style>
