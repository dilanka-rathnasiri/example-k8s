import * as k8s from "@pulumi/kubernetes";
import {Namespace} from "@pulumi/kubernetes/core/v1";

const stack = async (): Promise<void> => {
    const promNSName: string = "prometheus";
    const promNS: Namespace = new k8s.core.v1.Namespace("prometheus-namespace",
        {
            metadata: {
                name: promNSName,
            },
        },);

    const promChart = new k8s.helm.v4.Chart("prometheus-chart",
        {
            chart: "prometheus",
            namespace: promNSName,
            repositoryOpts: {
                repo: "https://prometheus-community.github.io/helm-charts/",
            },
        }, {dependsOn: [promNS]},);
}

stack();
