# Skaffold: Local development with Kubernetes

Skaffold is amazing for local development with kubernetes. I can locally test my changes without having to deploy remotely. Helping speed up local feature development and giving me more confidence in my changes.
I started using Skaffold for all new projects in my current position, well for any new microservice in our ETL data pipeline and it works pretty well on a minikube cluster.

## Getting Started with tooling
Let’s get our minikube cluster setup. Install minikube locally by using homebrew:

```$ brew install minikube```

Make sure it was installed successfully:

```$ minikube version```

Output:
```
minikube version: v1.27.1
commit: fe869b5d4da11ba318eb84a3ac00f336411de7ba
```
Start minikube:
```
$ minikube start --feature-gates=EphemeralContainers=true
```
Use the minikube addon to enable the ingress nginx controller:
```
$ minikube addons enable ingress
```
Install skaffold on your machine:
```
$ brew install skaffold
```
Validate that the install was successful:
```
$ skaffold version
```
Now run the init command:
```
$ skaffold init 
```
The init command tries to bootstrap your projects and setting it up to deploy with cli tools such as:
```
kubectl & kustomize
```
Bringing up your local cluster:
```
$ skaffold dev --port-forward
```
