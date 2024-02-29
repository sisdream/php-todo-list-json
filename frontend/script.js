const { createApp} = Vue;

const app = createApp({
    data(){
        return{
            title: "PHP ToDo List JSON",
            todoList: [
                'Passare in banca',
                'Andare in farmacia',
                'Fare la spesa'
            ],
        }
    }
});

app.mount("#app");