var mongoose=require('mongoose');
var issueSchema=require('./issue.schema.server');

var issueModel=mongoose.model('IssueModel',issueSchema);

issueModel.createIssue=createIssue;
issueModel.findIssueById=findIssueById;
issueModel.findIssueByTerms=findIssueByTerms;
issueModel.addFollower=addFollower;
issueModel.removeFollower=removeFollower;
issueModel.addComment=addComment;
issueModel.removeComment=removeComment;
issueModel.updateState=updateState;
issueModel.updateAssigned=updateState;
