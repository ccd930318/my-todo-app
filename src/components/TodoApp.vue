<template>
    <div class="max-w-md mx-auto font-sans p-4">
      <h1 class="text-2xl font-bold mb-4">My Todo List</h1>
  
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add a new task"
        class="w-full px-4 py-2 mb-4 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div class="flex justify-center gap-2 mb-4">
        <button
            @click="filter = 'all'"
            :class="filter === 'all' ? activeTabClass : inactiveTabClass"
        >
            全部
        </button>
        <button
            @click="filter = 'active'"
            :class="filter === 'active' ? activeTabClass : inactiveTabClass"
        >
            未完成
        </button>
        <button
            @click="filter = 'completed'"
            :class="filter === 'completed' ? activeTabClass : inactiveTabClass"
        >
            已完成
        </button>
      </div>


  
      <ul>
        <li v-for="(todo, index) in filteredTodos" :key="index" class="mb-2">
          <span
            :class="{ 'line-through text-gray-500': todo.completed }"
            class="cursor-pointer"
            @click="toggleComplete(index)"
          >
            {{ todo.text }}
          </span>
          <button
            @click="removeTodo(index)"
            class="ml-2 text-red-500 hover:text-red-700 text-base transition-all duration-200 transform hover:scale-125"
            >
            <font-awesome-icon :icon="['fas', 'trash']" />
            </button>

        </li>
      </ul>
    </div>
</template>
  

<script setup>
// 新增
import { ref } from 'vue';
const newTodo = ref('');
const todos = ref([]);
const addTodo = () => {
    if (newTodo.value.trim()) {
        todos.value.push({ text: newTodo.value, completed: false });
        newTodo.value = '';
    }
};
const toggleComplete = (index) => {
    todos.value[index].completed = !todos.value[index].completed;
};
const removeTodo = (index) => {
    todos.value.splice(index, 1);
};
// Filter functionality
import { computed } from 'vue';
const filter = ref('all');

const filteredTodos = computed(() => {
  if (filter.value === 'completed') {
    return todos.value.filter(todo => todo.completed);
  } else if (filter.value === 'active') {
    return todos.value.filter(todo => !todo.completed);
  } else {
    return todos.value;
  }
});
// Tab styles
const activeTabClass =
  'bg-blue-600 text-white font-medium px-4 py-1.5 rounded-full shadow transition';
const inactiveTabClass =
  'bg-transparent border border-gray-400 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-1.5 rounded-full transition';

</script>