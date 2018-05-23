<template>
    <div class="one-breadcrumb">
        <span v-for="(item, index) in data">
            <template v-if="index !== data.length-1">
                <i class="usable-sign"></i>
                 <a :href="item.link">{{item.name.replace(/[{]{2}([A-Za-z0-9_]*)[}]{2}/g ,"")}}</a>
                <span>/</span>
            </template>
            <template v-else>
                 <i class="disable-sign"></i>
                 <span>{{item.name.replace(/[{]{2}([A-Za-z0-9_]*)[}]{2}/g ,"")}}</span>
            </template>
        </span>
    </div>
</template>

<script>
  export default {
    name: 'one-breadcrumb',
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
      }
    },
    watch: {
    },
    methods: {
    },
    mounted () {
    }
  }
</script>

<style scoped lang="scss">
    .one-breadcrumb{
        *{
            box-sizing: border-box;
        }
        display: block;
        position: relative;
        color: #999;
        font-size: 14px;
        span{
            position: relative;
            a{
                color: #495060;
                transition: color .2s ease-in-out;
                background: 0 0;
                text-decoration: none;
                outline: 0;
                cursor: pointer;
                margin-left: 12px;
            }
            span{
                margin: 0 8px 0 8px;
                color: #dddee1;
            }
            &:last-child{
                span:first-child{
                    color: #495060;
                    transition: color .2s ease-in-out;
                    background: 0 0;
                    text-decoration: none;
                    outline: 0;
                    margin: 0 0;
                }
                span:last-child{
                    font-weight: 700;
                    color: #495060;
                }
            }
            .usable-sign{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                display: inline-block;
                width: 8px;
                height: 8px;
                background-color: #258ded;
                border-radius: 50%;
            }
            .disable-sign{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                display: inline-block;
                width: 8px;
                height: 8px;
                background-color: #ccc;
                border-radius: 50%;
            }
        }
    }
</style>
