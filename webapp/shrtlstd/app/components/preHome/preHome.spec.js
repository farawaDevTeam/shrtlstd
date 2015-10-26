describe('preHome controller', function(){
	
	var ctrl,
		_state;

	beforeEach(module('shrtlstdModule'));


	beforeEach(inject(function($controller, $state){
		_state = $state;
		ctrl = $controller('preHomeCtrl', {
			$state: _state
		});
	}));


	it('should go to another state', function(){
		spyOn(_state, 'go');
		expect(_state.go).not.toHaveBeenCalled();
		ctrl.goHome();
		expect(_state.go).toHaveBeenCalled();
	});
});