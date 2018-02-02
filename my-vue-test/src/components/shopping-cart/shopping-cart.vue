<template>
  <div class="shopping-cart">
    <div v-if="list.length">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" @change="handleCheckAll" ref="checkAll">全选</th>
            <th></th>
            <th>商品名称</th>
            <th>商品单价</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list">
            <td><input type="checkbox" name="goods" @change="handleCheck(index)" :checked="item.checked"></td>
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>
              <button @click="handleReduce(index)"
                      :disabled="item.count === 1">-</button>
              {{ item.count }}
              <button @click="handleAdd(index)">+</button>
            </td>
            <td>
              <button @click="handleRemove(index)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>总价为：￥{{totalPrice}}</div>
    </div>
    <div v-else class="no-goods">
      <img src="./shopping-cart.png">
      <p>您的购物车空空如也</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'iPhone 7',
          price: 6188,
          count: 1,
          checked: false
        },
        {
          id: 2,
          name: 'iPad Pro',
          price: 5888,
          count: 1,
          checked: false
        },
        {
          id: 3,
          name: 'MacBook Pro',
          price: 21488,
          count: 1,
          checked: false
        }
      ],
      checkedAll: false
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      for (let i = 0; i < this.list.length; i++) {
        let item = this.list[i]
        if (item.checked) {
          total += item.price * item.count
        }
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }
  },
  methods: {
    handleReduce (index) {
      this.list[index].count--
    },
    handleAdd (index) {
      this.list[index].count++
    },
    handleRemove (index) {
      this.list.splice(index, 1)
    },
    handleCheck (index) {
      if (this.checkedAll) {
        this.$refs.checkAll.checked = false
        this.checkedAll = false
      }
      this.list[index].checked = !this.list[index].checked
    },
    handleCheckAll () {
      if (!this.checkedAll) {
        for (let i = 0; i < this.list.length; i++) {
          if (!this.list[i].checked) {
            this.handleCheck(i)
          }
        }
        this.checkedAll = true
      } else {
        this.list.forEach((ele) => {
          ele.checked = !ele.checked
        })
        this.checkedAll = false
      }
    }
  }
}
</script>

<style scoped>
  .shopping-cart {
    border: 1px solid #cccccc;
    padding: 20px 0;
  }

  .no-goods {
    padding: 20px 0;
  }
  table {
    margin: 20px auto;
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
  }
  th, td {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: left;
  }
  th {
    background: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
    white-space: nowrap;
  }
</style>
