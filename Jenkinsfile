pipeline {
    agent any

    tools {
        nodejs "node"
    }

    //stages {
        //stage('Limpieza de base de datos') {
           // steps {
                // Ejecutar el script de limpieza de base de datos
               // bat '''
              //  sqlcmd -S "LMARQUEZ-NB\\SQLEXPRESS" -E -i limpiar_db.sql
               // '''
          //  }
       // }

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/FLMarquez/Cypress_Arquisoft.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key e5ddfb10-374c-4b83-8529-7cfeb213e47c --parallel'
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/FLMarquez/Cypress_Arquisoft.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npx cypress run --record --key e5ddfb10-374c-4b83-8529-7cfeb213e47c --parallel'
                    }
                }
            }
        }
    }
//}
