## Branching

You should always make changes on a branch (never make direct changes to the `master` branch). A new branch should be created for work on a new issue. The branch name should be the issue number followed by a short description of the issue. For example, if you are working on issue #1, you should create a branch named `1-implementing-new-feature`. This will ensure that the branch is automatically linked to that issue, and add some QOL improvements when creating merge requests.

### Creating a new branch
This is a step by step guide on how to create a new branch. You first need to be on a branch in order to branch out from it (often just the `master` branch). Then you write the command `git checkout -b <branch-name>`. This will create a new branch with the name you specified, and automatically switch to that branch. You can now make changes to the code, and commit them to the branch. 

### Updating a branch with content in `master`
Before you create a merge request, you should make sure that your branch is up to date with the `master` branch. This is to ensure that there are no merge conflicts when you create the merge request. \
The code block below assumes you start on your own branch and want to update it with main.
```
(On your own branch)
> git checkout master

(Now you are on the main branch)
> git pull
> git checkout <your-branch-name>

(Now you are on your own branch again)
> git merge master

(There may be merge conflicts here, if so, resolve them (resolving them in VSCode is recommended))

(Now you can push your changes to remote without any merge conflicts)
> git push
```

## Merge requests (or pull requests)

When you are done with your changes, and want to merge your branch into `master`, you will need to create a Merge Request. This is done by going to the "Merge requests" tab on GitLab, and clicking the "New merge request" button. You will then be presented with a page where you can select the branch you want to merge into `master`, and the branch you want to merge from. You can then click the "Create merge request" button. You will then be presented with a page where you can write a description of the changes you have made. If this PR closes an issue add this in the description: `Closes #issue-number`, this will automatically close the issue when the merge request is merged.

In this repository you can approve your own merge request, and merge it into `master`, without any other reviewers. If you want others to review your PR, you can add them as reviewers.

When the review is done, you are ready to merge into `master`. Click the "Merge pull request" button, and then the "Confirm merge" button (pick the default option (not squash merge)). You have now merged your branch into `master`, and your changes are now live.
