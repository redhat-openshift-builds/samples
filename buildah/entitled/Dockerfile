FROM registry.access.redhat.com/ubi9/ubi:latest
ARG ORG_ID
ARG KEY_NAME

RUN set -eu; \
    subscription-manager register --org="${ORG_ID}" --activationkey="${KEY_NAME}" || true; \
    dnf module enable -y nodejs:20 && \
    dnf install -y nodejs && \
    subscription-manager unregister || true; \
    dnf clean all