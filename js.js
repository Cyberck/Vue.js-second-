
let id = 1;

const app = {
  data() {
    return {
      title: 'Sikli',
      text: '',
      list: [
        {id: id++, name: 'Html'},
        {id: id++, name: 'Css'},
        {id: id++, name: 'Js'},
      ]
    }
  }, 
  computed: {
    getListLength() {
      return this.list.length
    }
  },
  methods: {
 
    delNote(note) {
      this.list = this.list.filter(item => item.id != note.id)
    },
    addNote() {
      if(this.text.length > 1 && isNaN(this.text)) {
        this.list.push({
          id: id++,
          name: this.text
        })
        this.text = ''
      }
    }
  },
}

Vue.createApp(app).mount('#app')