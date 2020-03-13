new Vue({
  el: '#app',
  
  data () {
    return {
      courses: [

      ],
      title: '',
      time: 0
    }
  },
  
  computed: {
    totalTime() {
      totalTime = 0;
      console.log(this.courses.forEach(course => {
        totalTime += parseInt(course.time);
      }));
      return totalTime;
    }
  },
  
  methods: {
    addCourse() {
      this.courses.push({
        title: this.title,
        time: this.time
      })
    }
  }
})