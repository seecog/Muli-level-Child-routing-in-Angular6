(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('workflow-engine', ['exports', '@angular/core'], factory) :
    (factory((global['workflow-engine'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WorkflowEngineService = /** @class */ (function () {
        function WorkflowEngineService() {
        }
        WorkflowEngineService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        WorkflowEngineService.ctorParameters = function () { return []; };
        /** @nocollapse */ WorkflowEngineService.ngInjectableDef = i0.defineInjectable({ factory: function WorkflowEngineService_Factory() { return new WorkflowEngineService(); }, token: WorkflowEngineService, providedIn: "root" });
        return WorkflowEngineService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WorkflowEngineComponent = /** @class */ (function () {
        function WorkflowEngineComponent() {
        }
        /**
         * @return {?}
         */
        WorkflowEngineComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        WorkflowEngineComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-workflow-engine',
                        template: "\n    <p>\n      workflow-engine works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        WorkflowEngineComponent.ctorParameters = function () { return []; };
        return WorkflowEngineComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WorkflowEngineModule = /** @class */ (function () {
        function WorkflowEngineModule() {
        }
        WorkflowEngineModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [WorkflowEngineComponent],
                        imports: [],
                        exports: [WorkflowEngineComponent]
                    },] }
        ];
        return WorkflowEngineModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.WorkflowEngineService = WorkflowEngineService;
    exports.WorkflowEngineComponent = WorkflowEngineComponent;
    exports.WorkflowEngineModule = WorkflowEngineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=workflow-engine.umd.js.map