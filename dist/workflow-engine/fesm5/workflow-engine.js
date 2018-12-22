import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WorkflowEngineService = /** @class */ (function () {
    function WorkflowEngineService() {
    }
    WorkflowEngineService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WorkflowEngineService.ctorParameters = function () { return []; };
    /** @nocollapse */ WorkflowEngineService.ngInjectableDef = defineInjectable({ factory: function WorkflowEngineService_Factory() { return new WorkflowEngineService(); }, token: WorkflowEngineService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { WorkflowEngineService, WorkflowEngineComponent, WorkflowEngineModule };

//# sourceMappingURL=workflow-engine.js.map