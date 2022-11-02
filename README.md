# Skaffold: Local development with Kubernetes

Skaffold is amazing for local development with kubernetes. I can locally test my changes without having to deploy remotely. Helping speed up local feature development and giving me more confidence in my changes.
I started using Skaffold for all new projects in my current position, well for any new microservice in our ETL data pipeline and it works pretty well on a minikube cluster.

## Getting Started with tooling
Let’s get our minikube cluster setup. Install minikube locally by using homebrew:

```$ brew install minikube```
Make sure it was installed successfully:

$ minikube version
Output:
