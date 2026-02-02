Ajustes

-Al crear un equipo falta el tema de titulares, propio, etc... lo puedes encontrar en este proyecto (C:\Users\Yorda\Desktop\Workspace\CodeControl\gh_gestion) son sun grupo de campos en el form de crear equipo dependeite del otro, el tema de titulares, leasing y etc..analizalo porque ya tenemos una funcionalidad como esa bajo el nombre contrato las cuales hay que renombrar como se menciona en al tarea de abajo, pero analiza que en ese proyecto tenemos un tema de condiciones dependientes de los valores de los campos que tambien tenemos que traernos aqui

-Lo que actualmente tenemos con el nombre tipo de contrato tenemos que cambiarlo a titularidad, ya que eso define quien es el titular del vehiculo, que es justo lo mencionado arriba en el punto anterior

- agregar en informacion del equipo el valor del equipo, en la tab de contrato va el valor mensual, al crear un equipo en la seccion de contrato pedimos un precio, este sera el precio mensual que se esta pagando por el vehiculo si es de tipo leasing(esto ba relacionado a 2 tareas arriba, el tema de las condiciones que tienes que analizar del otro proyecto, este valor si el equipo es propio no debe existir, debe estar oculto)
- 
- QR En el detalle del equipo del proyecto ubicado en ((C:\Users\Yorda\Desktop\Workspace\CodeControl\gh_gestion)) se tiene una funcionalidad de QR, el cual genera un QR para cada equipo y este redirije a una vista de mantenimiento (fuera de las rutas protegidas) para un flujo de manteniemiento que todavia no hemos implementado ni lo haremos de momento, solo quiero que generes la funcionalidad de QR y al redireccion a una nueva vista sin proteccion mockeada mostrando datos del equipo, indicando que estara disponible proximamente

-Nuevo modulo comercial, agregarlo en el sidebar Configuración dentro del padre empresa, a nivel de GENERAL, RRHH Y EQUIPOS, este modulo comercial tendra los siguientes items y pages (CRUD, usando la tabla del server y estructura de las demas features):
-Clientes (cuit, mail, contacto) (tenemos que mover la tab contratistas al nuevo modulo comercial y renombrarla a clientes). Esta page de clientes es en realidad la page /dashboard/company/contractors que tenemos en equipo, solo que esta mal ubicada, tenemos que moverla a este nuevo modulo comercial y renombrarla a clientes, migrando toda su estructura y ruta y asegurarse que se piden los datos mencionados al principio

-Posibles clientes (se convierte en cliente, se necesita solo una parte de los datos que se pide en clientes) (cuit, contacto (relacion), mail, Razon Social). Esta page sera para leads que se pueden convertir en clientes, necesitan los datos de los clientes pero no todos por ahora, con esos escritos en la tarea esta bien, la idea es que estos posibles clientes puedan ser convertidos en clientes desde aqui agregando los datos faltantes para clientes, a estos posibles clientes se les puede asignar un contacto para que puedan ser contactados (tambien a los clientes)

-Contactos (nombre, apellido, mail, telefono, puesto) crear este crud para los contactos, los cuales se vinculan a un cliente, un contacto un cliente

-Presupuestos (desde aqui debemos poder crear un presupuesto y ver los presupuestos emitidos (vencidos, orden de compra, cliente asociado, que es lo cotizado, a cuanto dinero se cotiza, detalle del presupuesto)) estos presupuestos se pueden asignar a clientes (este cotizador todavia no esta desarrolada la idea completa, asi que puedes dejar esta funcionalidad a implementar, si queires disena una vista de ejemplo todo disabled para tener una idea)


Sistema de roles:
En el sidebar en el item empresa / general tenemos que crear la page para usuarios y roles (dividelo segun tu criterio), la idea es tener una pagina de usuarios del sistema (estos usuarios del sistema pueden ser propios empleados del sistema con acceso a el(no se si te comente, los empleados comunes no tienen acceso a este sistema, solo es para la administracion) entonces la idea es que algunos usuarios (que pueden ser empleados ya resgistrados en la tabla employee) puedan ingresar al sistema a administrar esta company, se debe elegir un empleado si aplica, el password y si usar el mismo email o no (analiazlo completo y mejora esto porque la verdad lo estoy penando sobre la marcha, pero entiendes la idea)) entonces estos usuarios/empleados selectos o creados tendrana acceso, es como una invitacion a la empreesa, para esto tambien tenesitamos el sistema de roles y permisos, creo qeu tengo un MD con una implementacion hibrida del sistema de permisos, (C:\Users\Yorda\Desktop\Workspace\CodeControl\newproject\docs\RBAC_PROPOSAL.md) analizala, algo asi tenemos que crear para implementar a este sistema de permisos, es largo y complejo, tenemos que manejarlo en lo posible del lado del servidor, cuidar los detalles y fallbacks, edge cases para que la implementacion quede personalizada, robusta y cuidada, poder proteger, rutas, componentes, botones, permitir acciones especificas en cioertos modulos, como mas adelante en manteniemiento aprobar solicitudes, reprogramar fechas, etc.. a ese nivel de personalizacion, tiene que ser super claro e intuitivo, si a un EMPLEADO con acceso se le da de baja el USUARIO tampoco debe poder ingresar al sistema a esta empresa, tenemos que restringir el acceso, debemos tener la page de usuarios, roles, tener la posibilidad de asignar los roles a usuarios, editar roles, permisos, y demas

------------------------------
EL boton de acciones del documento en mobile se desborda

en "Editar Contacto
Modifica los datos del contacto" no se precarga el name

al cread y editar clientes o leads debo poder elegir el contacto (no solo crearlo)s

saltearse la page de detalle de empresa si es unica empresa, y modifica rel sidebar a EMPRESA en lugar de empresas

Donde entra el vincular empleado en el flujo de invitar
Falta proteger el sidebar y correctamente algunas pages
