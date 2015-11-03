describe('preHome controller', function () {

	var ctrl,
		_state,
		_timeout,
		_httpBackend;

	beforeEach(module('shrtlstdModule'));

	beforeEach(inject(function ($injector) {
		_state = $injector.get('$state');
		_timeout = $injector.get('$timeout');
		_httpBackend = $injector.get('$httpBackend');

		_httpBackend.whenGET(/\/*.html/).respond(200);

		ctrl = $injector.get('$controller')('preHomeCtrl', {
			$state: _state,
			langService: langServiceMock
		});
	}));


	it('should go to another state', function () {
		spyOn(_state, 'go');
		expect(_state.go).not.toHaveBeenCalled();
		ctrl.goHome();
		_timeout.flush();
		expect(_state.go).toHaveBeenCalled();
	});
});
