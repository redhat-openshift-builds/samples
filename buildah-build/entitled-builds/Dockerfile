FROM registry.access.redhat.com/ubi9/ubi:latest

RUN dnf --enablerepo=codeready-builder-for-rhel-9-x86_64-rpms install \
    cloud-init \ 
    nss_wrapper \
    uid_wrapper -y && \
    dnf clean all -y
