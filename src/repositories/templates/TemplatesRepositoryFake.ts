import { createTemplatesFixture } from "../../fixtures/templates";
import { TemplatesRepository } from "./TemplatesRepository";

export class TemplatesRepositoryFake implements TemplatesRepository {
  async fetchTemplates() {
    return createTemplatesFixture();
  }
}
