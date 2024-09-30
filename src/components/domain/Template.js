class Template {
    constructor(templateId, projectIds=null, templateName, owner) {
        this.templateId = templateId; // pk
        this.projectIds = projectIds;
        this.templateName = templateName;
        this.owner = owner;

    }

    ownProject(projectId) {
        return this.templateId.includes(projectId);
    }
}