<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/support/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', "ewaoproject" );


/** Database username */

define( 'DB_USER', "ewaoproject" );


/** Database password */

define( 'DB_PASSWORD', "idina123*A" );


/** Database hostname */

define( 'DB_HOST', "db" );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8mb4' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         '?O.y8*JY!y8p.Z{A7pBWE(.QdmGt0o?x>(>t-APo9<S,}0{DN<#dw^YxA<@h3Jxf' );

define( 'SECURE_AUTH_KEY',  '0jeYIf:[`sKj~A-@7D&mX>f14%>w*S+?`kQ1V}=X?Cb7Y]]#ns[=^KXSiVd@}8[W' );

define( 'LOGGED_IN_KEY',    '`(o%QrjeC]M4Hfuo.e99vnQx30d-VrdZ=Vk?WH*2:atZuolT(V_Z#ul_jI$|GW<8' );

define( 'NONCE_KEY',        '10+__e44,N<+jOnT}<=5y6>n!I1XYf:=B5tqWt(|$y*fa<9PSb:&/?>#I!OdT229' );

define( 'AUTH_SALT',        '~lr#*!s9:,*RO<R1?rARI8Jj%KdC^>xq YFu|Y3F?ww !rAq5XQ,,^OVA}8g6/DU' );

define( 'SECURE_AUTH_SALT', '}Bqt?xd6fy8NF?Vw{03i{,eRX2^[cN/#{R/^T]m`.d36P!@Eku[9}u7x=jPMBM}0' );

define( 'LOGGED_IN_SALT',   '^h&+>f^gLSlq}DO&N@pi;@Z?]!M3Poly^KPG|gE*K/iR@hPe#?M?A~buVF3?.!Do' );

define( 'NONCE_SALT',       'V]MMP6+>y8u=4owCsLt!dawf]i]Iz.3|tUpk}Zr!y*l6mqF:&!1(v^1JK-8$C>WE' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'aN8Ujwxov_';

/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/support/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */




define( 'DISALLOW_FILE_EDIT', true );
define( 'CONCATENATE_SCRIPTS', false );
define( 'DUPLICATOR_AUTH_KEY', '/K{Ol2Qn}lL|_|vAS:%1i$5jKfT%Wnd!mWI~k]wi$pYI#<s]y;2nX G+>=,V-j{o' );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', dirname(__FILE__) . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

