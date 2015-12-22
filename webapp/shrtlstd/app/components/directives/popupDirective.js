angular.module('directivesModule')
	.directive('popUp', function (ngDialog, langService) {
		'use strict';

		return {
			restrict: 'A',
			link: function (scope, el, attr) {

				el.bind('click', function () {
					langService.getLabels(function (labels) {
						ngDialog.close();
						ngDialog.open({
							template: attr.tpl + '.html',
							closeByDocument: false,
							preCloseCallback: function (value) {
								
								if (value === '$closeButton') {
									
									var confirmTpl = '\
									<section class="mainContent iBlock wFull">\
										<h4>' + labels.confirm.really + '</h4>\
										<section class="mt1 ftAmatic tt2 txt-center ls0-3">\
											<p class="mb1">' + labels.confirm.message + '</p>\
											<div class="mt1">\
												<input autofocus="false" type="button" class="btn btn-primary mb1 tt2 ftAmatic" ng-click="confirm(1)" value="' + labels.confirm.yes + '"/>\
                    							<input type="button" class="btn mb1 tt2 ftAmatic" ng-click="closeThisDialog(0)" value="' + labels.confirm.no + '"/>\
											</div>\
										</section>\
									</section>';
									
									var nestedConfirmDialog = ngDialog.openConfirm({
										template: confirmTpl,
										plain: true
									});

									return nestedConfirmDialog;
								}

							}
						});

					});
				});

			}
		};
	});