# Referenced from From https://github.com/shipwrigh-io/sample-go

FROM registry.access.redhat.com/ubi9/go-toolset:1.21 AS build

COPY main.go .
ENV CGO_ENABLED=0
RUN go build \
    -ldflags "-s -w -extldflags '-static'" \
    -o /tmp/helloworld \
    main.go

FROM scratch
COPY --from=build /tmp/helloworld ./helloworld
ENTRYPOINT [ "./helloworld" ]
EXPOSE 8080
