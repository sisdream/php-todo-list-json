const { createApp} = Vue;

const app = createApp({
    data(){
        return{
            title: "PHP ToDo List JSON",
            todoList: [],
            newItem: "",
        }
    },
    methods:{
        fetchTodoList(){
            axios.get('http://localhost:8888/php-todo-list-json/backend/').then((response) => {
                this.todoList = response.data;
            });
        },
        addItem(){
            console.log("item da aggiungere: " + this.newItem);
            this.newItem = '';
        }
    },
    mounted(){
        this.fetchTodoList();
    }
});

app.mount("#app");