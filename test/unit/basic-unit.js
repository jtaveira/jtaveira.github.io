assert = chai.assert

module('app')

describe("basic-unit", function() {

  var createController

  beforeEach(module('app'))

  beforeEach(inject(function($injector) {

    var locals = {
      $scope : $injector.get("$rootScope").$new()
    }

    var $controller = $injector.get("$controller")
    createController = function() {
       return $controller('RootController', locals)
     }
  }))

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend')
  }))

  it("should do nothing", function() {
    assert.isOk('OK')
  })

  xit("process schema", function() {

    var schema = {
      name : "criarProcesso",
      JSONSchema : {
        title : "criarProcesso",
        type: "object",
        description : "cria um novo processo no sistema",
        properties : {
          nome : { type: "string" },
          idade : { type: "integer" }
        },
        required : ["nome"]
      }
    }

    var data = {
      nome: "Vitor",
      idade: 29
    }

    var ajv = Ajv({ allErrors: true })
    var validate = ajv.validate(schema.JSONSchema, data)
    console.log(validate)
    console.log(ajv.errors)

    // var ajv = Ajv({ allErrors: true })
    // var validate = ajv.validate(schema.schema, data)
    // if (validate) {
    //   console.log(validate)
    // } else {
    //   console.log(ajv.errors)
    // }
  })

})
