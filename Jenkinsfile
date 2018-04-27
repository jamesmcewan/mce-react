pipeline {
  agent {
    docker {
      image 'node:9.11.1-alpine'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'Yarn install'
      }
    }
    stage('Test') {
      steps {
        sh 'Yarn test'
      }
    }
    stage('Build') {
      steps {
        sh 'Yarn build'
      }
    }
  }
  environment {
    CI = 'true'
  }
}