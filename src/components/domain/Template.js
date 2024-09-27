class Template {
    constructor(templateId, projectIds=null) {
        this.templateId = templateId; // pk
        this.projectIds = projectIds;
    }

    ownProject(projectId) {
        return this.templateId.includes(projectId);
    }
}