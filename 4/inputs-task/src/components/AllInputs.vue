<script setup lang="ts">
import { reactive } from 'vue';
    const formData = reactive({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
        interests: "",
        bio: "",
        range: 0,
        time: "",
        subscribe: false,
    });

  
</script>

<template>
    <div class="main-container">
      <form>
        <div>
          <label for="name">Name:</label><br>
          <input type="text" id="name" v-model="formData.name" />
        </div>
  
        <div>
          <label for="email">Email:</label><br>
          <input type="email" id="email" v-model="formData.email" />
        </div>
  
        <div>
          <label for="password">Password:</label><br>
          <input type="password" id="password" v-model="formData.password" />
        </div>
  
        <div>
          <label for="age">Age:</label><br>
          <input type="number" id="age" v-model="formData.age" />
        </div>
  
        <div>
          <label for="gender">Gender:</label><br>
          <div>
            <input type="radio" id="male" value="male" v-model="formData.gender" />
            <label for="male">Male</label>
          </div>
  
          <div>
            <input type="radio" id="female" value="female" v-model="formData.gender" />
            <label for="female">Female</label>
          </div>
        </div>
  
        <div>
          <label for="interests">Interests:</label><br>
          <select id="interests" v-model="formData.interests">
            <option value="sports">Sports</option>
            <option value="music">Music</option>
            <option value="travel">Travel</option>
            <option value="cooking">Cooking</option>
          </select>
        </div>
  
        <div>
          <label for="bio">Bio:</label><br>
          <textarea id="bio" v-model="formData.bio"></textarea>
        </div>
        
        <div>
          <label for="vol">Mood rate:</label><br>
          <input type="range" min="0" max="50" v-model="formData.range">
        </div>

        <div>
          <label for="appt">Select a time:</label>
          <input type="time" id="appt" name="appt" v-model="formData.time">
        </div>

        <div>
          <label for="subscribe">Subscribe:</label>
          <input type="checkbox" id="subscribe" v-model="formData.subscribe" />
        </div>
      </form>
  
      <div>
        <h2>Form Data:</h2>
        <p>Name: {{ formData.name }}</p>
        <p>Email: {{ formData.email }}</p>
        <p>Password: {{ formData.password }}</p>
        <p>Age: {{ formData.age }}</p>
        <p>Gender: {{ formData.gender }}</p>
        <p>Interests: {{ formData.interests }}</p>
        <p>Bio: {{ formData.bio }}</p>
        <p>Mood rate: {{ formData.range }}</p>
        <p>Time: {{ formData.time }}</p>
        <p>Subscribe: {{ formData.subscribe }}</p>
      </div>
    </div>
  </template>

<style scoped>
small {
  font-size: 8px;
}
.main-container {
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>

