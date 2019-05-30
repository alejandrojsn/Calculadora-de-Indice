app = new Vue({
	el: '#app',
	data: {
		message: 'Hola',
		trimestres: [
			{
				nombre: 'Trimestre 1',
				materias: [
					{ nombre: 'Mate I', creditos: 4, nota: 5 },
					{ nombre: 'Lenguaje I', creditos: 3, nota: 5}
				],
				nuevaMateria: { nombre: "", creditos: 0, nota: 0}
			}
		],
		nuevoTrimestre: ""
	},
	methods: {
		quitar: function (quitarDe, elementoAQuitar) {
			quitarDe.splice(quitarDe.indexOf(elementoAQuitar), 1);
		},
		añadir: function (añadirA, nuevoElemento) {
			añadirA.push(nuevoElemento);
		},
		añadirMateria: function (trimestre) {
			this.añadir(trimestre.materias, Object.assign({}, trimestre.nuevaMateria));
		},
		trimestreFactory: function (nombre) {
			return { nombre, materias: [], nuevaMateria: { nombre: "", creditos: 0, nota: 0 } }
		}
	},
	computed: {
		indice: function () {
			total = this.trimestres.reduce(function(prev, act){
				return prev + act.materias.reduce(function(prev, act){ return prev+act.nota*act.creditos }, 0);
			}, 0);
			creditos = this.trimestres.reduce(function(prev, act){
				return prev + act.materias.reduce(function(prev, act){ return prev+act.creditos }, 0);
			}, 0);

			return total/creditos;
		}
	}
});