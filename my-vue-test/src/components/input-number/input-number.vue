<template>
  <div class="input-number">
    <button class="btn btn-reduce" 
            @click="handleReduce"
            :disabled="currentValue <= min"
            >-</button>
    <input type="text" 
           class="input-text" 
           :value="currentValue"
           @change="handleChange">
    <button class="btn btn-add" 
            @click="handleAdd"
            :disabled="currentValue >= max"
            >+</button>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleReduce () {
      this.currentValue--;
    },
    handleAdd () {
      this.currentValue++;
    },
    handleChange() {

    },
    updateValue (val) {
       
    },
    _isValueNumber (value) {
      return (/(^-?[0-9]+\.{1}\d+$) | (^-?[1-9][0-9]*$) | (^-?0{1}$)/).test(value + '');
    }
  }
}
</script>

<style scoped>
  .input-number {
    display: flex;
    width: 180px;
    height: 40px;
    margin: 0 auto;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
  }
  .input-number:hover {
    border-color: #409eff;
  }
  .input-text {
    width: 50%;
    color: #606266;
    border: none;
    border-left: none;
    border-right: none;
    text-align: center;
  }
  .input-text:focus {
    outline: none;
  }
  .btn {
    width: 25%;
    font-size: 20px;
    cursor: pointer;
    background-color: #f5f7fa;
    border: none;
    outline:none;
  }
  .btn:hover {
    color: #409eff;
  }
  .btn.btn-reduce {
    border-right: 1px solid #dcdfe6;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .btn.btn-reduce:hover {
    border-right: 1px solid #409eff;
  }
  .btn.btn-add {
    border-left: 1px solid #dcdfe6;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .btn.btn-add:hover {
    border-left: 1px solid #409eff;
  }
</style>
