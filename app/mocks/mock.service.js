"use strict";
var MockService = (function () {
    function MockService() {
    }
    MockService.prototype.createDb = function () {
        var chatMessages = [
            {
                name: "Brittany",
                message: "This message is coming from mock $http data."
            },
            {
                name: "Ann",
                message: "We can use this to test angular without SharePoint."
            }
        ];
        return { chatMessages: chatMessages };
    };
    return MockService;
}());
exports.MockService = MockService;
//# sourceMappingURL=mock.service.js.map