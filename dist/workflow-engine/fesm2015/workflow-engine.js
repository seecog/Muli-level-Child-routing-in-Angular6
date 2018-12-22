import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WorkflowEngineService {
    constructor() { }
}
WorkflowEngineService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
WorkflowEngineService.ctorParameters = () => [];
/** @nocollapse */ WorkflowEngineService.ngInjectableDef = defineInjectable({ factory: function WorkflowEngineService_Factory() { return new WorkflowEngineService(); }, token: WorkflowEngineService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WorkflowEngineComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
WorkflowEngineComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-workflow-engine',
                template: `
    <p>
      workflow-engine works!
    </p>
  `
            }] }
];
/** @nocollapse */
WorkflowEngineComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WorkflowEngineModule {
}
WorkflowEngineModule.decorators = [
    { type: NgModule, args: [{
                declarations: [WorkflowEngineComponent],
                imports: [],
                exports: [WorkflowEngineComponent]
            },] }
];

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