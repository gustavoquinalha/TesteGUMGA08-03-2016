app
    .service('baresService',['API','$http',function(API,$http){
        this.buscaTodos = function() {
            return $http.get(API.url + 'bares');
        }
        this.busca = function(id) {
            return $http.get(API.url + 'bares/' + id);
        }
        this.salvar = function(bar) {
            return $http.post(API.url + 'bares', bar);
        }
        this.alterar = function(id, bar) {
            return $http.put(API.url + 'bares/' + id, bar);
        }
        this.remover = function(id) {
            return $http.delete(API.url + 'bares/' + id);
        }
    }]);
