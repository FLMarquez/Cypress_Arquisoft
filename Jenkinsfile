pipeline {
    agent any

    tools {
        nodejs "node"
    }

    stages {
        
        stage('Checkout Code') {
            steps {
                 checkout([$class: 'GitSCM', branches: [[name: '*/main']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'e5ddfb10-374c-4b83-8529-7cfeb213e47c', url: 'https://github.com/FLMarquez/Cypress_Arquisoft.git']]])
                
            }
        }

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key e5ddfb10-374c-4b83-8529-7cfeb213e47c --parallel'
                    }
                }

                // Si necesitas más etapas paralelas, puedes agregarlas aquí.
            }
        }
        
        // Si necesitas una etapa para limpiar la base de datos, puedes agregarla aquí.
        // stage('Limpieza de base de datos') {
        //     steps {
        //         bat '''
        //             sqlcmd -S "LMARQUEZ-NB\\SQLEXPRESS" -E -i limpiar_db.sql
        //         '''
        //     }
        // }
    }
}
