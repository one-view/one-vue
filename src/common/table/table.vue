<template>
  <div class="info-table">
    <table border="1">
      <thead>
        <tr>
          <th v-for="item in head">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in body">
          <td v-for="it in item">{{ it }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'info-table',
    props: {
      head: {
        type: Array,
        default: () => []
      },
      body: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss">
.info-table{
  table{
    width: 100%;
    border: 1px solid #e8e8e8;
    thead{
      background-color: #f9f9f9;
    }
    th{
      padding: 10px 15px;
    }
    td{
      padding: 15px;
      color: #666;
    }
  }
}
</style>
