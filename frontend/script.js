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
            axios.get('../backend/index.php').then((response) => {
                this.todoList = response.data;
            });
        },
        addItem(){
            const item = this.newItem;
            this.newItem = '';

            const data = {
                item: item,
            }

            const params = {
                headers: {'Content-Type': 'multipart/form-data'},
            }
            axios.post('../backend/item.php', data, params).then((response) => {
                this.todoList = response.data;
            })
        }
    },
    mounted(){
        this.fetchTodoList();
    }
});
app.mount("#app");