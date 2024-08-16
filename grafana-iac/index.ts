import * as k8s from "@pulumi/kubernetes";

const main = async () => {
    const grafanaChart = new k8s.helm.v4.Chart("grafana-chart", {
        chart: "grafana",
        repositoryOpts: {
            repo: "https://grafana.github.io/helm-charts/"
        },
        values: {
            adminUser: "admin",
            adminPassword: "admin",
        }
    });
}

main();
