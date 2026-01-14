FROM registry.access.redhat.com/ubi9/ubi:latest
ARG ORG_ID
ARG KEY_NAME
RUN subscription-manager register \
      --org=${ORG_ID} \
      --activationkey=${KEY_NAME} && \
    dnf module enable nodejs:20 && \
    dnf install -y nodejs && \
    subscription-manager unregister && \
    dnf clean all