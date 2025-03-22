git init
git add .
git commit -m "Initialized quantum cinematic platform"
git branch -M main
git remote add origin https://github.com/your-account/wision-visuals.git
git push -u origin main
# After pushing to GitHub:
gh workflow run cine-deploy.yml

watch -n 5 'curl -s https://api.github.com/repos/your-account/wision-visuals/actions/runs | jq ".workflow_runs[0].status"'
