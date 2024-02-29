const { createApp} = Vue;

const app = createApp({
    data(){
        return{
            title: "PHP ToDo List JSON",
            todoList: [],
        }
    },
    methods:{
        fetchTodoList(){
            axios.get('http://localhost:8888/php-todo-list-json/backend/').then((response) => {
                console.log(response);
            });
        }
    },
    mounted(){
        this.fetchTodoList();
    }
});

app.mount("#app");