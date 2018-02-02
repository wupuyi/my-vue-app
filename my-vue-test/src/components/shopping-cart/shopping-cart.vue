<template>
  <div class="shopping-cart">
    <div v-if="showAll">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" @change="handleCheckAll" ref="checkAll">全选</th>
            <th>类别</th>
            <th></th>
            <th>商品名称</th>
            <th>商品单价</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(category, indexs) in list">
            <tr v-for="(item, index) in category">
              <td><input type="checkbox" name="goods" @change="handleCheck(indexs, index)" :checked="item.checked"></td>
              <td>{{ item.category }}</td>
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <button @click="handleReduce(indexs, index)"
                        :disabled="item.count === 1">-</button>
                {{ item.count }}
                <button @click="handleAdd(indexs, index)">+</button>
              </td>
              <td>
                <button @click="handleRemove(indexs, index)">移除</button>
              </td>
            </tr>
          </template>
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
        [
          {
            id: 1,
            name: 'iPhone 7',
            price: 6188,
            count: 1,
            checked: false,
            category: '电子产品'
          },
          {
            id: 2,
            name: 'iPad Pro',
            price: 5888,
            count: 1,
            checked: false,
            category: '电子产品'
          },
          {
            id: 3,
            name: 'MacBook Pro',
            price: 21488,
            count: 1,
            checked: false,
            category: '电子产品'
          }
        ],
        [
          {
            id: 4,
            name: '土豆土豆',
            price: 3,
            count: 1,
            checked: false,
            category: '果蔬'
          },
          {
            id: 5,
            name: '榴莲榴莲',
            price: 50,
            count: 1,
            checked: false,
            category: '果蔬'
          }
        ]
      ],
      checkedAll: false,
      showAll: 0
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      for (let i = 0; i < this.list.length; i++) {
        let category = this.list[i]
        for (let j = 0; j < category.length; j++) {
          let item = category[j]
          if (item.checked) {
            total += item.price * item.count
          }
        }
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }
  },
  methods: {
    handleReduce (indexs, index) {
      this.list[indexs][index].count--
    },
    handleAdd (indexs, index) {
      this.list[indexs][index].count++
    },
    handleRemove (indexs, index) {
      this.list[indexs].splice(index, 1)
      this.isNull()
    },
    handleCheck (indexs, index) {
      if (this.checkedAll) {
        this.$refs.checkAll.checked = false
        this.checkedAll = false
      }
      this.list[indexs][index].checked = !this.list[indexs][index].checked
    },
    handleCheckAll () {
      if (!this.checkedAll) {
        for (let i = 0; i < this.list.length; i++) {
          for (let j = 0; j < this.list[i].length; j++) {
            if (!this.list[i][j].checked) {
              this.handleCheck(i, j)
            }
          }
        }
        this.checkedAll = true
      } else {
        this.list.forEach((ele) => {
          ele.forEach((e) => {
            e.checked = !e.checked
          })
        })
        this.checkedAll = false
      }
    },
    isNull () {
      let len = 0
      this.list.forEach((ele) => {
        len += ele.length
      })
      this.showAll = len;
    }
  },
  mounted() {
    this.isNull()
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
