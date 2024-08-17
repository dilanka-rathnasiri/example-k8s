# k8s-monitoring

Pulumi infrastructure as code for deploying Prometheus chart in a kubernetes cluster

### Apply prometheus chart

1. execute `pulumi login --local` in terminal
2. execute `pulumi install` in terminal
3. execute `export PULUMI_CONFIG_PASSPHRASE=<your passphrase>` in terminal
4. execute `pulumi stack select <stack name> --create` in terminal
5. execute `pulumi preview --json` in terminal (optional)
6. execute `pulumi up --yes` in terminal

### Delete prometheus chart

1. execute `export PULUMI_CONFIG_PASSPHRASE=<your passphrase>` in terminal
2. execute `pulumi destroy --yes` in terminal
