--CLIENTES
delete Clients
where DocumentNumber = '31355352'
--USUARIOS
DELETE FROM Users
WHERE DocumentNumber IN ('32785541', '30789456','30785541','30789455','30080909','31789941');
--PROYECTOS
delete from Projects
where Name = 'Casa de 2 habitaciones con hall'
--TIPOLOGIA
delete from ProjectTypes
where ProjectTypeName = 'Vivienda Clásica con 2 habitaciones y hall'
--COBROS
delete  from Payments
WHERE Amount IN ('2500000.00','2500000.00', '7500000.00');
--SERVICIO
delete from ServiceTypes
where ServiceTypeName = 'Construcción de Vivienda'
--HUB
delete from Hub
where UserName = 'Marquez'
--ASSIGNMENTS
delete Assignments
where AssignmentName IN ('Planificación de Recursos Prueba','Diseño Preliminar Prueba','Adquisición de Materiales Prueba','Supervisión de Construcción Prueba','Control de Calidad Prueba');