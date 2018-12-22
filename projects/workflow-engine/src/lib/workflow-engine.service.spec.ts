import { TestBed } from '@angular/core/testing';

import { WorkflowEngineService } from './workflow-engine.service';

describe('WorkflowEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkflowEngineService = TestBed.get(WorkflowEngineService);
    expect(service).toBeTruthy();
  });
});
