'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('No debe tener items al empezar', function () {
    expect(scope.tareas.length).toBe(0);
  });

  it('Agrego un item', function () {
    scope.tarea='Nueva tarea';
    scope.addTarea();
    expect(scope.tareas.length).toBe(1);
  });

  it('Agrego y elimino un item', function () {
    scope.tarea='Nueva tarea';
    scope.addTarea();
    scope.eliminarTarea(0);
    expect(scope.tareas.length).toBe(0);
  });


});
