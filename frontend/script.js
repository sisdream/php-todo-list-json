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
            const item = this.newItem;
            this.newItem = '';

            const data = {
                params:{item},
            }

            const params = {
                headers: {'Content-Type': 'multipart/form-data'},
            }
            axios.post('http://localhost:8888/php-todo-list-json/backend/', data, params).then((response) => {
            
            })
        }
    },
    mounted(){
        this.fetchTodoList();
    }
});

app.mount("#app");