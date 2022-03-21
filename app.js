var main = new Vue({
  el: '#main',
  data: {
		codigo: '',
		titulo: '',
		autor1: '',
		pais1: '',
		autor2: '',
		pais2: '',
		listado: []
  },
  methods: {
	  consultarLibros() {
		  let url = "http://localhost:8081/listarLibros";
		  
		  axios.get(url)
			.then( response => {
				//console.log(response.data);
				this.listado = response.data;
			})
			.catch( error => {
				alert(error);
			});
	  }
  }
})
