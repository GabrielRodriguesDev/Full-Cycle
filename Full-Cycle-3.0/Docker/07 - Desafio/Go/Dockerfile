FROM golang:1-alpine AS builder
WORKDIR /app
COPY . .
RUN go mod init app
RUN CGO_ENABLED=0 GOOS=linux go build main.go

FROM scratch
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
ENTRYPOINT ["./main"]