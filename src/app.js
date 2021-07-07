var vueApp = new Vue({
  el: '#vueApp',
  data: {
    todos: [],
    currTodo: "",
  },
  
  methods: {
    
   
    submit: function(){
      this.todos.push({name:this.currTodo});
      this.currTodo = "";
      this.$http.post('/todos', this.todos).then(function(response) {
        console.log(response.body)
      }, function(response) {
        console.log("errors!")
      });
    },
    save: function(todo) {
      var index = this.todos.indexOf(todo);
      this.todos[index].editing = false;
    },
  },
  created: function(){
    this.$http.get('/todos').then(function(response) {
      console.log(response.body);
      var data = JSON.parse(response.body);
      this.todos = data.todos;
    }, function(response) {
      console.log("errors!")
    });
  }
})
