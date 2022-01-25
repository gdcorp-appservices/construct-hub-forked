// undefined
/* eslint-disable @typescript-eslint/member-ordering */

/**
 * Valid SPDX License identifiers.
 */
export class SpdxLicense {
  private static readonly _ALL = new Map<string, SpdxLicense>();

  //#region Individual SPDX Licenses
  /**
   * BSD Zero Clause License
   *
   * @osiApproved
   *
   * @see http://landley.net/toybox/license.html
   */
  public static readonly ZERO_BSD = new SpdxLicense('0BSD');

  /**
   * Attribution Assurance License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/attribution
   */
  public static readonly AAL = new SpdxLicense('AAL');

  /**
   * Amazon Digital Services License
   *
   * @see https://fedoraproject.org/wiki/Licensing/AmazonDigitalServicesLicense
   */
  public static readonly ADSL = new SpdxLicense('ADSL');

  /**
   * Academic Free License v1.1
   *
   * @osiApproved
   *
   * @see http://opensource.linux-mirror.org/licenses/afl-1.1.txt
   */
  public static readonly AFL_1_1 = new SpdxLicense('AFL-1.1');

  /**
   * Academic Free License v1.2
   *
   * @osiApproved
   *
   * @see http://opensource.linux-mirror.org/licenses/afl-1.2.txt
   */
  public static readonly AFL_1_2 = new SpdxLicense('AFL-1.2');

  /**
   * Academic Free License v2.0
   *
   * @osiApproved
   *
   * @see http://wayback.archive.org/web/20060924134533/http://www.opensource.org/licenses/afl-2.0.txt
   */
  public static readonly AFL_2_0 = new SpdxLicense('AFL-2.0');

  /**
   * Academic Free License v2.1
   *
   * @osiApproved
   *
   * @see http://opensource.linux-mirror.org/licenses/afl-2.1.txt
   */
  public static readonly AFL_2_1 = new SpdxLicense('AFL-2.1');

  /**
   * Academic Free License v3.0
   *
   * @osiApproved
   *
   * @see http://www.rosenlaw.com/AFL3.0.htm
   */
  public static readonly AFL_3_0 = new SpdxLicense('AFL-3.0');

  /**
   * Affero General Public License v1.0
   *
   * @see http://www.affero.org/oagpl.html
   */
  public static readonly AGPL_1_0 = new SpdxLicense('AGPL-1.0');

  /**
   * Affero General Public License v1.0 only
   *
   * @see http://www.affero.org/oagpl.html
   */
  public static readonly AGPL_1_0_ONLY = new SpdxLicense('AGPL-1.0-only');

  /**
   * Affero General Public License v1.0 or later
   *
   * @see http://www.affero.org/oagpl.html
   */
  public static readonly AGPL_1_0_OR_LATER = new SpdxLicense('AGPL-1.0-or-later');

  /**
   * GNU Affero General Public License v3.0
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/agpl.txt
   */
  public static readonly AGPL_3_0 = new SpdxLicense('AGPL-3.0');

  /**
   * GNU Affero General Public License v3.0 only
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/agpl.txt
   */
  public static readonly AGPL_3_0_ONLY = new SpdxLicense('AGPL-3.0-only');

  /**
   * GNU Affero General Public License v3.0 or later
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/agpl.txt
   */
  public static readonly AGPL_3_0_OR_LATER = new SpdxLicense('AGPL-3.0-or-later');

  /**
   * AMD's plpa_map.c License
   *
   * @see https://fedoraproject.org/wiki/Licensing/AMD_plpa_map_License
   */
  public static readonly AMDPLPA = new SpdxLicense('AMDPLPA');

  /**
   * Apple MIT License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Apple_MIT_License
   */
  public static readonly AML = new SpdxLicense('AML');

  /**
   * Academy of Motion Picture Arts and Sciences BSD
   *
   * @see https://fedoraproject.org/wiki/Licensing/BSD#AMPASBSD
   */
  public static readonly AMPAS = new SpdxLicense('AMPAS');

  /**
   * ANTLR Software Rights Notice
   *
   * @see http://www.antlr2.org/license.html
   */
  public static readonly ANTLR_PD = new SpdxLicense('ANTLR-PD');

  /**
   * ANTLR Software Rights Notice with license fallback
   *
   * @see http://www.antlr2.org/license.html
   */
  public static readonly ANTLR_PD_FALLBACK = new SpdxLicense('ANTLR-PD-fallback');

  /**
   * Adobe Postscript AFM License
   *
   * @see https://fedoraproject.org/wiki/Licensing/AdobePostscriptAFM
   */
  public static readonly APAFML = new SpdxLicense('APAFML');

  /**
   * Adaptive Public License 1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/APL-1.0
   */
  public static readonly APL_1_0 = new SpdxLicense('APL-1.0');

  /**
   * Apple Public Source License 1.0
   *
   * @osiApproved
   *
   * @see https://fedoraproject.org/wiki/Licensing/Apple_Public_Source_License_1.0
   */
  public static readonly APSL_1_0 = new SpdxLicense('APSL-1.0');

  /**
   * Apple Public Source License 1.1
   *
   * @osiApproved
   *
   * @see http://www.opensource.apple.com/source/IOSerialFamily/IOSerialFamily-7/APPLE_LICENSE
   */
  public static readonly APSL_1_1 = new SpdxLicense('APSL-1.1');

  /**
   * Apple Public Source License 1.2
   *
   * @osiApproved
   *
   * @see http://www.samurajdata.se/opensource/mirror/licenses/apsl.php
   */
  public static readonly APSL_1_2 = new SpdxLicense('APSL-1.2');

  /**
   * Apple Public Source License 2.0
   *
   * @osiApproved
   *
   * @see http://www.opensource.apple.com/license/apsl/
   */
  public static readonly APSL_2_0 = new SpdxLicense('APSL-2.0');

  /**
   * Abstyles License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Abstyles
   */
  public static readonly ABSTYLES = new SpdxLicense('Abstyles');

  /**
   * Adobe Systems Incorporated Source Code License Agreement
   *
   * @see https://fedoraproject.org/wiki/Licensing/AdobeLicense
   */
  public static readonly ADOBE_2006 = new SpdxLicense('Adobe-2006');

  /**
   * Adobe Glyph List License
   *
   * @see https://fedoraproject.org/wiki/Licensing/MIT#AdobeGlyph
   */
  public static readonly ADOBE_GLYPH = new SpdxLicense('Adobe-Glyph');

  /**
   * Afmparse License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Afmparse
   */
  public static readonly AFMPARSE = new SpdxLicense('Afmparse');

  /**
   * Aladdin Free Public License
   *
   * @see http://pages.cs.wisc.edu/~ghost/doc/AFPL/6.01/Public.htm
   */
  public static readonly ALADDIN = new SpdxLicense('Aladdin');

  /**
   * Apache License 1.0
   *
   * @see http://www.apache.org/licenses/LICENSE-1.0
   */
  public static readonly APACHE_1_0 = new SpdxLicense('Apache-1.0');

  /**
   * Apache License 1.1
   *
   * @osiApproved
   *
   * @see http://apache.org/licenses/LICENSE-1.1
   */
  public static readonly APACHE_1_1 = new SpdxLicense('Apache-1.1');

  /**
   * Apache License 2.0
   *
   * @osiApproved
   *
   * @see http://www.apache.org/licenses/LICENSE-2.0
   */
  public static readonly APACHE_2_0 = new SpdxLicense('Apache-2.0');

  /**
   * Artistic License 1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Artistic-1.0
   */
  public static readonly ARTISTIC_1_0 = new SpdxLicense('Artistic-1.0');

  /**
   * Artistic License 1.0 (Perl)
   *
   * @osiApproved
   *
   * @see http://dev.perl.org/licenses/artistic.html
   */
  public static readonly ARTISTIC_1_0_PERL = new SpdxLicense('Artistic-1.0-Perl');

  /**
   * Artistic License 1.0 w/clause 8
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Artistic-1.0
   */
  public static readonly ARTISTIC_1_0_CL8 = new SpdxLicense('Artistic-1.0-cl8');

  /**
   * Artistic License 2.0
   *
   * @osiApproved
   *
   * @see http://www.perlfoundation.org/artistic_license_2_0
   */
  public static readonly ARTISTIC_2_0 = new SpdxLicense('Artistic-2.0');

  /**
   * BSD 1-Clause License
   *
   * @osiApproved
   *
   * @see https://svnweb.freebsd.org/base/head/include/ifaddrs.h?revision=326823
   */
  public static readonly BSD_1_CLAUSE = new SpdxLicense('BSD-1-Clause');

  /**
   * BSD 2-Clause "Simplified" License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/BSD-2-Clause
   */
  public static readonly BSD_2_CLAUSE = new SpdxLicense('BSD-2-Clause');

  /**
   * BSD 2-Clause FreeBSD License
   *
   * @see http://www.freebsd.org/copyright/freebsd-license.html
   */
  public static readonly BSD_2_CLAUSE_FREEBSD = new SpdxLicense('BSD-2-Clause-FreeBSD');

  /**
   * BSD 2-Clause NetBSD License
   *
   * @see http://www.netbsd.org/about/redistribution.html#default
   */
  public static readonly BSD_2_CLAUSE_NETBSD = new SpdxLicense('BSD-2-Clause-NetBSD');

  /**
   * BSD-2-Clause Plus Patent License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/BSDplusPatent
   */
  public static readonly BSD_2_CLAUSE_PATENT = new SpdxLicense('BSD-2-Clause-Patent');

  /**
   * BSD 2-Clause with views sentence
   *
   * @see http://www.freebsd.org/copyright/freebsd-license.html
   */
  public static readonly BSD_2_CLAUSE_VIEWS = new SpdxLicense('BSD-2-Clause-Views');

  /**
   * BSD 3-Clause "New" or "Revised" License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/BSD-3-Clause
   */
  public static readonly BSD_3_CLAUSE = new SpdxLicense('BSD-3-Clause');

  /**
   * BSD with attribution
   *
   * @see https://fedoraproject.org/wiki/Licensing/BSD_with_Attribution
   */
  public static readonly BSD_3_CLAUSE_ATTRIBUTION = new SpdxLicense('BSD-3-Clause-Attribution');

  /**
   * BSD 3-Clause Clear License
   *
   * @see http://labs.metacarta.com/license-explanation.html#license
   */
  public static readonly BSD_3_CLAUSE_CLEAR = new SpdxLicense('BSD-3-Clause-Clear');

  /**
   * Lawrence Berkeley National Labs BSD variant license
   *
   * @osiApproved
   *
   * @see https://fedoraproject.org/wiki/Licensing/LBNLBSD
   */
  public static readonly BSD_3_CLAUSE_LBNL = new SpdxLicense('BSD-3-Clause-LBNL');

  /**
   * BSD 3-Clause No Nuclear License
   *
   * @see http://download.oracle.com/otn-pub/java/licenses/bsd.txt?AuthParam=1467140197_43d516ce1776bd08a58235a7785be1cc
   */
  public static readonly BSD_3_CLAUSE_NO_NUCLEAR_LICENSE = new SpdxLicense('BSD-3-Clause-No-Nuclear-License');

  /**
   * BSD 3-Clause No Nuclear License 2014
   *
   * @see https://java.net/projects/javaeetutorial/pages/BerkeleyLicense
   */
  public static readonly BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014 = new SpdxLicense('BSD-3-Clause-No-Nuclear-License-2014');

  /**
   * BSD 3-Clause No Nuclear Warranty
   *
   * @see https://jogamp.org/git/?p=gluegen.git;a=blob_plain;f=LICENSE.txt
   */
  public static readonly BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY = new SpdxLicense('BSD-3-Clause-No-Nuclear-Warranty');

  /**
   * BSD 3-Clause Open MPI variant
   *
   * @see https://www.open-mpi.org/community/license.php
   */
  public static readonly BSD_3_CLAUSE_OPEN_MPI = new SpdxLicense('BSD-3-Clause-Open-MPI');

  /**
   * BSD 4-Clause "Original" or "Old" License
   *
   * @see http://directory.fsf.org/wiki/License:BSD_4Clause
   */
  public static readonly BSD_4_CLAUSE = new SpdxLicense('BSD-4-Clause');

  /**
   * BSD-4-Clause (University of California-Specific)
   *
   * @see http://www.freebsd.org/copyright/license.html
   */
  public static readonly BSD_4_CLAUSE_UC = new SpdxLicense('BSD-4-Clause-UC');

  /**
   * BSD Protection License
   *
   * @see https://fedoraproject.org/wiki/Licensing/BSD_Protection_License
   */
  public static readonly BSD_PROTECTION = new SpdxLicense('BSD-Protection');

  /**
   * BSD Source Code Attribution
   *
   * @see https://github.com/robbiehanson/CocoaHTTPServer/blob/master/LICENSE.txt
   */
  public static readonly BSD_SOURCE_CODE = new SpdxLicense('BSD-Source-Code');

  /**
   * Boost Software License 1.0
   *
   * @osiApproved
   *
   * @see http://www.boost.org/LICENSE_1_0.txt
   */
  public static readonly BSL_1_0 = new SpdxLicense('BSL-1.0');

  /**
   * Business Source License 1.1
   *
   * @see https://mariadb.com/bsl11/
   */
  public static readonly BUSL_1_1 = new SpdxLicense('BUSL-1.1');

  /**
   * Bahyph License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Bahyph
   */
  public static readonly BAHYPH = new SpdxLicense('Bahyph');

  /**
   * Barr License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Barr
   */
  public static readonly BARR = new SpdxLicense('Barr');

  /**
   * Beerware License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Beerware
   */
  public static readonly BEERWARE = new SpdxLicense('Beerware');

  /**
   * BitTorrent Open Source License v1.0
   *
   * @see http://sources.gentoo.org/cgi-bin/viewvc.cgi/gentoo-x86/licenses/BitTorrent?r1=1.1&r2=1.1.1.1&diff_format=s
   */
  public static readonly BITTORRENT_1_0 = new SpdxLicense('BitTorrent-1.0');

  /**
   * BitTorrent Open Source License v1.1
   *
   * @see http://directory.fsf.org/wiki/License:BitTorrentOSL1.1
   */
  public static readonly BITTORRENT_1_1 = new SpdxLicense('BitTorrent-1.1');

  /**
   * Blue Oak Model License 1.0.0
   *
   * @see https://blueoakcouncil.org/license/1.0.0
   */
  public static readonly BLUEOAK_1_0_0 = new SpdxLicense('BlueOak-1.0.0');

  /**
   * Borceux license
   *
   * @see https://fedoraproject.org/wiki/Licensing/Borceux
   */
  public static readonly BORCEUX = new SpdxLicense('Borceux');

  /**
   * Cryptographic Autonomy License 1.0
   *
   * @osiApproved
   *
   * @see http://cryptographicautonomylicense.com/license-text.html
   */
  public static readonly CAL_1_0 = new SpdxLicense('CAL-1.0');

  /**
   * Cryptographic Autonomy License 1.0 (Combined Work Exception)
   *
   * @osiApproved
   *
   * @see http://cryptographicautonomylicense.com/license-text.html
   */
  public static readonly CAL_1_0_COMBINED_WORK_EXCEPTION = new SpdxLicense('CAL-1.0-Combined-Work-Exception');

  /**
   * Computer Associates Trusted Open Source License 1.1
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/CATOSL-1.1
   */
  public static readonly CATOSL_1_1 = new SpdxLicense('CATOSL-1.1');

  /**
   * Creative Commons Attribution 1.0 Generic
   *
   * @see https://creativecommons.org/licenses/by/1.0/legalcode
   */
  public static readonly CC_BY_1_0 = new SpdxLicense('CC-BY-1.0');

  /**
   * Creative Commons Attribution 2.0 Generic
   *
   * @see https://creativecommons.org/licenses/by/2.0/legalcode
   */
  public static readonly CC_BY_2_0 = new SpdxLicense('CC-BY-2.0');

  /**
   * Creative Commons Attribution 2.5 Generic
   *
   * @see https://creativecommons.org/licenses/by/2.5/legalcode
   */
  public static readonly CC_BY_2_5 = new SpdxLicense('CC-BY-2.5');

  /**
   * Creative Commons Attribution 3.0 Unported
   *
   * @see https://creativecommons.org/licenses/by/3.0/legalcode
   */
  public static readonly CC_BY_3_0 = new SpdxLicense('CC-BY-3.0');

  /**
   * Creative Commons Attribution 3.0 Austria
   *
   * @see https://creativecommons.org/licenses/by/3.0/at/legalcode
   */
  public static readonly CC_BY_3_0_AT = new SpdxLicense('CC-BY-3.0-AT');

  /**
   * Creative Commons Attribution 3.0 United States
   *
   * @see https://creativecommons.org/licenses/by/3.0/us/legalcode
   */
  public static readonly CC_BY_3_0_US = new SpdxLicense('CC-BY-3.0-US');

  /**
   * Creative Commons Attribution 4.0 International
   *
   * @see https://creativecommons.org/licenses/by/4.0/legalcode
   */
  public static readonly CC_BY_4_0 = new SpdxLicense('CC-BY-4.0');

  /**
   * Creative Commons Attribution Non Commercial 1.0 Generic
   *
   * @see https://creativecommons.org/licenses/by-nc/1.0/legalcode
   */
  public static readonly CC_BY_NC_1_0 = new SpdxLicense('CC-BY-NC-1.0');

  /**
   * Creative Commons Attribution Non Commercial 2.0 Generic
   *
   * @see https://creativecommons.org/licenses/by-nc/2.0/legalcode
   */
  public static readonly CC_BY_NC_2_0 = new SpdxLicense('CC-BY-NC-2.0');

  /**
   * Creative Commons Attribution Non Commercial 2.5 Generic
   *
   * @see https://creativecommons.org/licenses/by-nc/2.5/legalcode
   */
  public static readonly CC_BY_NC_2_5 = new SpdxLicense('CC-BY-NC-2.5');

  /**
   * Creative Commons Attribution Non Commercial 3.0 Unported
   *
   * @see https://creativecommons.org/licenses/by-nc/3.0/legalcode
   */
  public static readonly CC_BY_NC_3_0 = new SpdxLicense('CC-BY-NC-3.0');

  /**
   * Creative Commons Attribution Non Commercial 4.0 International
   *
   * @see https://creativecommons.org/licenses/by-nc/4.0/legalcode
   */
  public static readonly CC_BY_NC_4_0 = new SpdxLicense('CC-BY-NC-4.0');

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 1.0 Generic
   *
   * @see https://creativecommons.org/licenses/by-nd-nc/1.0/legalcode
   */
  public static readonly CC_BY_NC_ND_1_0 = new SpdxLicense('CC-BY-NC-ND-1.0');

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 2.0 Generic
   *
   * @see https://creativecommons.org/licenses/by-nc-nd/2.0/legalcode
   */
  public static readonly CC_BY_NC_ND_2_0 = new SpdxLicense('CC-BY-NC-ND-2.0');

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 2.5 Generic
   *
   * @see https://creativecommons.org/licenses/by-nc-nd/2.5/legalcode
   */
  public static readonly CC_BY_NC_ND_2_5 = new SpdxLicense('CC-BY-NC-ND-2.5');

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 3.0 Unported
   *
   * @see https://creativecommons.org/licenses/by-nc-nd/3.0/legalcode
   */
  public static readonly CC_BY_NC_ND_3_0 = new SpdxLicense('CC-BY-NC-ND-3.0');

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 3.0 IGO
   *
   * @see https://creativecommons.org/licenses/by-nc-nd/3.0/igo/legalcode
   */
  public static readonly CC_BY_NC_ND_3_0_IGO = new SpdxLicense('CC-BY-NC-ND-3.0-IGO');

  /**
   * Creative Commons Attribution Non Commercial No Derivatives 4.0 International
   *
   * @see https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode
   */
  public static readonly CC_BY_NC_ND_4_0 = new SpdxLicense('CC-BY-NC-ND-4.0');

  /**
   * Creative Commons Attribution Non Commercial Share Alike 1.0 Generic
   *
   * @see https://creativecommons.org/licenses/by-nc-sa/1.0/legalcode
   */
  public static readonly CC_BY_NC_SA_1_0 = new SpdxLicense('CC-BY-NC-SA-1.0');

  /**
   * Creative Commons Attribution Non Commercial Share Alike 2.0 Generic
   *
   * @see https://creativecommons.org/licenses/by-nc-sa/2.0/legalcode
   */
  public static readonly CC_BY_NC_SA_2_0 = new SpdxLicense('CC-BY-NC-SA-2.0');

  /**
   * Creative Commons Attribution Non Commercial Share Alike 2.5 Generic
   *
   * @see https://creativecommons.org/licenses/by-nc-sa/2.5/legalcode
   */
  public static readonly CC_BY_NC_SA_2_5 = new SpdxLicense('CC-BY-NC-SA-2.5');

  /**
   * Creative Commons Attribution Non Commercial Share Alike 3.0 Unported
   *
   * @see https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode
   */
  public static readonly CC_BY_NC_SA_3_0 = new SpdxLicense('CC-BY-NC-SA-3.0');

  /**
   * Creative Commons Attribution Non Commercial Share Alike 4.0 International
   *
   * @see https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
   */
  public static readonly CC_BY_NC_SA_4_0 = new SpdxLicense('CC-BY-NC-SA-4.0');

  /**
   * Creative Commons Attribution No Derivatives 1.0 Generic
   *
   * @see https://creativecommons.org/licenses/by-nd/1.0/legalcode
   */
  public static readonly CC_BY_ND_1_0 = new SpdxLicense('CC-BY-ND-1.0');

  /**
   * Creative Commons Attribution No Derivatives 2.0 Generic
   *
   * @see https://creativecommons.org/licenses/by-nd/2.0/legalcode
   */
  public static readonly CC_BY_ND_2_0 = new SpdxLicense('CC-BY-ND-2.0');

  /**
   * Creative Commons Attribution No Derivatives 2.5 Generic
   *
   * @see https://creativecommons.org/licenses/by-nd/2.5/legalcode
   */
  public static readonly CC_BY_ND_2_5 = new SpdxLicense('CC-BY-ND-2.5');

  /**
   * Creative Commons Attribution No Derivatives 3.0 Unported
   *
   * @see https://creativecommons.org/licenses/by-nd/3.0/legalcode
   */
  public static readonly CC_BY_ND_3_0 = new SpdxLicense('CC-BY-ND-3.0');

  /**
   * Creative Commons Attribution No Derivatives 4.0 International
   *
   * @see https://creativecommons.org/licenses/by-nd/4.0/legalcode
   */
  public static readonly CC_BY_ND_4_0 = new SpdxLicense('CC-BY-ND-4.0');

  /**
   * Creative Commons Attribution Share Alike 1.0 Generic
   *
   * @see https://creativecommons.org/licenses/by-sa/1.0/legalcode
   */
  public static readonly CC_BY_SA_1_0 = new SpdxLicense('CC-BY-SA-1.0');

  /**
   * Creative Commons Attribution Share Alike 2.0 Generic
   *
   * @see https://creativecommons.org/licenses/by-sa/2.0/legalcode
   */
  public static readonly CC_BY_SA_2_0 = new SpdxLicense('CC-BY-SA-2.0');

  /**
   * Creative Commons Attribution Share Alike 2.0 England and Wales
   *
   * @see https://creativecommons.org/licenses/by-sa/2.0/uk/legalcode
   */
  public static readonly CC_BY_SA_2_0_UK = new SpdxLicense('CC-BY-SA-2.0-UK');

  /**
   * Creative Commons Attribution Share Alike 2.5 Generic
   *
   * @see https://creativecommons.org/licenses/by-sa/2.5/legalcode
   */
  public static readonly CC_BY_SA_2_5 = new SpdxLicense('CC-BY-SA-2.5');

  /**
   * Creative Commons Attribution Share Alike 3.0 Unported
   *
   * @see https://creativecommons.org/licenses/by-sa/3.0/legalcode
   */
  public static readonly CC_BY_SA_3_0 = new SpdxLicense('CC-BY-SA-3.0');

  /**
   * Creative Commons Attribution-Share Alike 3.0 Austria
   *
   * @see https://creativecommons.org/licenses/by-sa/3.0/at/legalcode
   */
  public static readonly CC_BY_SA_3_0_AT = new SpdxLicense('CC-BY-SA-3.0-AT');

  /**
   * Creative Commons Attribution Share Alike 4.0 International
   *
   * @see https://creativecommons.org/licenses/by-sa/4.0/legalcode
   */
  public static readonly CC_BY_SA_4_0 = new SpdxLicense('CC-BY-SA-4.0');

  /**
   * Creative Commons Public Domain Dedication and Certification
   *
   * @see https://creativecommons.org/licenses/publicdomain/
   */
  public static readonly CC_PDDC = new SpdxLicense('CC-PDDC');

  /**
   * Creative Commons Zero v1.0 Universal
   *
   * @see https://creativecommons.org/publicdomain/zero/1.0/legalcode
   */
  public static readonly CC0_1_0 = new SpdxLicense('CC0-1.0');

  /**
   * Common Development and Distribution License 1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/cddl1
   */
  public static readonly CDDL_1_0 = new SpdxLicense('CDDL-1.0');

  /**
   * Common Development and Distribution License 1.1
   *
   * @see http://glassfish.java.net/public/CDDL+GPL_1_1.html
   */
  public static readonly CDDL_1_1 = new SpdxLicense('CDDL-1.1');

  /**
   * Community Data License Agreement Permissive 1.0
   *
   * @see https://cdla.io/permissive-1-0
   */
  public static readonly CDLA_PERMISSIVE_1_0 = new SpdxLicense('CDLA-Permissive-1.0');

  /**
   * Community Data License Agreement Sharing 1.0
   *
   * @see https://cdla.io/sharing-1-0
   */
  public static readonly CDLA_SHARING_1_0 = new SpdxLicense('CDLA-Sharing-1.0');

  /**
   * CeCILL Free Software License Agreement v1.0
   *
   * @see http://www.cecill.info/licences/Licence_CeCILL_V1-fr.html
   */
  public static readonly CECILL_1_0 = new SpdxLicense('CECILL-1.0');

  /**
   * CeCILL Free Software License Agreement v1.1
   *
   * @see http://www.cecill.info/licences/Licence_CeCILL_V1.1-US.html
   */
  public static readonly CECILL_1_1 = new SpdxLicense('CECILL-1.1');

  /**
   * CeCILL Free Software License Agreement v2.0
   *
   * @see http://www.cecill.info/licences/Licence_CeCILL_V2-en.html
   */
  public static readonly CECILL_2_0 = new SpdxLicense('CECILL-2.0');

  /**
   * CeCILL Free Software License Agreement v2.1
   *
   * @osiApproved
   *
   * @see http://www.cecill.info/licences/Licence_CeCILL_V2.1-en.html
   */
  public static readonly CECILL_2_1 = new SpdxLicense('CECILL-2.1');

  /**
   * CeCILL-B Free Software License Agreement
   *
   * @see http://www.cecill.info/licences/Licence_CeCILL-B_V1-en.html
   */
  public static readonly CECILL_B = new SpdxLicense('CECILL-B');

  /**
   * CeCILL-C Free Software License Agreement
   *
   * @see http://www.cecill.info/licences/Licence_CeCILL-C_V1-en.html
   */
  public static readonly CECILL_C = new SpdxLicense('CECILL-C');

  /**
   * CERN Open Hardware Licence v1.1
   *
   * @see https://www.ohwr.org/project/licenses/wikis/cern-ohl-v1.1
   */
  public static readonly CERN_OHL_1_1 = new SpdxLicense('CERN-OHL-1.1');

  /**
   * CERN Open Hardware Licence v1.2
   *
   * @see https://www.ohwr.org/project/licenses/wikis/cern-ohl-v1.2
   */
  public static readonly CERN_OHL_1_2 = new SpdxLicense('CERN-OHL-1.2');

  /**
   * CERN Open Hardware Licence Version 2 - Permissive
   *
   * @see https://www.ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2
   */
  public static readonly CERN_OHL_P_2_0 = new SpdxLicense('CERN-OHL-P-2.0');

  /**
   * CERN Open Hardware Licence Version 2 - Strongly Reciprocal
   *
   * @see https://www.ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2
   */
  public static readonly CERN_OHL_S_2_0 = new SpdxLicense('CERN-OHL-S-2.0');

  /**
   * CERN Open Hardware Licence Version 2 - Weakly Reciprocal
   *
   * @see https://www.ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2
   */
  public static readonly CERN_OHL_W_2_0 = new SpdxLicense('CERN-OHL-W-2.0');

  /**
   * CNRI Jython License
   *
   * @see http://www.jython.org/license.html
   */
  public static readonly CNRI_JYTHON = new SpdxLicense('CNRI-Jython');

  /**
   * CNRI Python License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/CNRI-Python
   */
  public static readonly CNRI_PYTHON = new SpdxLicense('CNRI-Python');

  /**
   * CNRI Python Open Source GPL Compatible License Agreement
   *
   * @see http://www.python.org/download/releases/1.6.1/download_win/
   */
  public static readonly CNRI_PYTHON_GPL_COMPATIBLE = new SpdxLicense('CNRI-Python-GPL-Compatible');

  /**
   * Common Public Attribution License 1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/CPAL-1.0
   */
  public static readonly CPAL_1_0 = new SpdxLicense('CPAL-1.0');

  /**
   * Common Public License 1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/CPL-1.0
   */
  public static readonly CPL_1_0 = new SpdxLicense('CPL-1.0');

  /**
   * Code Project Open License 1.02
   *
   * @see http://www.codeproject.com/info/cpol10.aspx
   */
  public static readonly CPOL_1_02 = new SpdxLicense('CPOL-1.02');

  /**
   * CUA Office Public License v1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/CUA-OPL-1.0
   */
  public static readonly CUA_OPL_1_0 = new SpdxLicense('CUA-OPL-1.0');

  /**
   * Caldera License
   *
   * @see http://www.lemis.com/grog/UNIX/ancient-source-all.pdf
   */
  public static readonly CALDERA = new SpdxLicense('Caldera');

  /**
   * Clarified Artistic License
   *
   * @see http://gianluca.dellavedova.org/2011/01/03/clarified-artistic-license/
   */
  public static readonly CL_ARTISTIC = new SpdxLicense('ClArtistic');

  /**
   * Condor Public License v1.1
   *
   * @see http://research.cs.wisc.edu/condor/license.html#condor
   */
  public static readonly CONDOR_1_1 = new SpdxLicense('Condor-1.1');

  /**
   * Crossword License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Crossword
   */
  public static readonly CROSSWORD = new SpdxLicense('Crossword');

  /**
   * CrystalStacker License
   *
   * @see https://fedoraproject.org/wiki/Licensing:CrystalStacker?rd=Licensing/CrystalStacker
   */
  public static readonly CRYSTAL_STACKER = new SpdxLicense('CrystalStacker');

  /**
   * Cube License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Cube
   */
  public static readonly CUBE = new SpdxLicense('Cube');

  /**
   * Deutsche Freie Software Lizenz
   *
   * @see http://www.dipp.nrw.de/d-fsl/lizenzen/
   */
  public static readonly D_FSL_1_0 = new SpdxLicense('D-FSL-1.0');

  /**
   * DOC License
   *
   * @see http://www.cs.wustl.edu/~schmidt/ACE-copying.html
   */
  public static readonly DOC = new SpdxLicense('DOC');

  /**
   * DSDP License
   *
   * @see https://fedoraproject.org/wiki/Licensing/DSDP
   */
  public static readonly DSDP = new SpdxLicense('DSDP');

  /**
   * Dotseqn License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Dotseqn
   */
  public static readonly DOTSEQN = new SpdxLicense('Dotseqn');

  /**
   * Educational Community License v1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/ECL-1.0
   */
  public static readonly ECL_1_0 = new SpdxLicense('ECL-1.0');

  /**
   * Educational Community License v2.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/ECL-2.0
   */
  public static readonly ECL_2_0 = new SpdxLicense('ECL-2.0');

  /**
   * Eiffel Forum License v1.0
   *
   * @osiApproved
   *
   * @see http://www.eiffel-nice.org/license/forum.txt
   */
  public static readonly EFL_1_0 = new SpdxLicense('EFL-1.0');

  /**
   * Eiffel Forum License v2.0
   *
   * @osiApproved
   *
   * @see http://www.eiffel-nice.org/license/eiffel-forum-license-2.html
   */
  public static readonly EFL_2_0 = new SpdxLicense('EFL-2.0');

  /**
   * EPICS Open License
   *
   * @see https://epics.anl.gov/license/open.php
   */
  public static readonly EPICS = new SpdxLicense('EPICS');

  /**
   * Eclipse Public License 1.0
   *
   * @osiApproved
   *
   * @see http://www.eclipse.org/legal/epl-v10.html
   */
  public static readonly EPL_1_0 = new SpdxLicense('EPL-1.0');

  /**
   * Eclipse Public License 2.0
   *
   * @osiApproved
   *
   * @see https://www.eclipse.org/legal/epl-2.0
   */
  public static readonly EPL_2_0 = new SpdxLicense('EPL-2.0');

  /**
   * EU DataGrid Software License
   *
   * @osiApproved
   *
   * @see http://eu-datagrid.web.cern.ch/eu-datagrid/license.html
   */
  public static readonly EUDATAGRID = new SpdxLicense('EUDatagrid');

  /**
   * European Union Public License 1.0
   *
   * @see http://ec.europa.eu/idabc/en/document/7330.html
   */
  public static readonly EUPL_1_0 = new SpdxLicense('EUPL-1.0');

  /**
   * European Union Public License 1.1
   *
   * @osiApproved
   *
   * @see https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
   */
  public static readonly EUPL_1_1 = new SpdxLicense('EUPL-1.1');

  /**
   * European Union Public License 1.2
   *
   * @osiApproved
   *
   * @see https://joinup.ec.europa.eu/page/eupl-text-11-12
   */
  public static readonly EUPL_1_2 = new SpdxLicense('EUPL-1.2');

  /**
   * Entessa Public License v1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Entessa
   */
  public static readonly ENTESSA = new SpdxLicense('Entessa');

  /**
   * Erlang Public License v1.1
   *
   * @see http://www.erlang.org/EPLICENSE
   */
  public static readonly ERLPL_1_1 = new SpdxLicense('ErlPL-1.1');

  /**
   * Eurosym License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Eurosym
   */
  public static readonly EUROSYM = new SpdxLicense('Eurosym');

  /**
   * FSF All Permissive License
   *
   * @see https://www.gnu.org/prep/maintain/html_node/License-Notices-for-Other-Files.html
   */
  public static readonly FSFAP = new SpdxLicense('FSFAP');

  /**
   * FSF Unlimited License
   *
   * @see https://fedoraproject.org/wiki/Licensing/FSF_Unlimited_License
   */
  public static readonly FSFUL = new SpdxLicense('FSFUL');

  /**
   * FSF Unlimited License (with License Retention)
   *
   * @see https://fedoraproject.org/wiki/Licensing/FSF_Unlimited_License#License_Retention_Variant
   */
  public static readonly FSFULLR = new SpdxLicense('FSFULLR');

  /**
   * Freetype Project License
   *
   * @see http://freetype.fis.uniroma2.it/FTL.TXT
   */
  public static readonly FTL = new SpdxLicense('FTL');

  /**
   * Fair License
   *
   * @osiApproved
   *
   * @see http://fairlicense.org/
   */
  public static readonly FAIR = new SpdxLicense('Fair');

  /**
   * Frameworx Open License 1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Frameworx-1.0
   */
  public static readonly FRAMEWORX_1_0 = new SpdxLicense('Frameworx-1.0');

  /**
   * FreeImage Public License v1.0
   *
   * @see http://freeimage.sourceforge.net/freeimage-license.txt
   */
  public static readonly FREE_IMAGE = new SpdxLicense('FreeImage');

  /**
   * GNU Free Documentation License v1.1
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt
   */
  public static readonly GFDL_1_1 = new SpdxLicense('GFDL-1.1');

  /**
   * GNU Free Documentation License v1.1 only - invariants
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt
   */
  public static readonly GFDL_1_1_INVARIANTS_ONLY = new SpdxLicense('GFDL-1.1-invariants-only');

  /**
   * GNU Free Documentation License v1.1 or later - invariants
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt
   */
  public static readonly GFDL_1_1_INVARIANTS_OR_LATER = new SpdxLicense('GFDL-1.1-invariants-or-later');

  /**
   * GNU Free Documentation License v1.1 only - no invariants
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt
   */
  public static readonly GFDL_1_1_NO_INVARIANTS_ONLY = new SpdxLicense('GFDL-1.1-no-invariants-only');

  /**
   * GNU Free Documentation License v1.1 or later - no invariants
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt
   */
  public static readonly GFDL_1_1_NO_INVARIANTS_OR_LATER = new SpdxLicense('GFDL-1.1-no-invariants-or-later');

  /**
   * GNU Free Documentation License v1.1 only
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt
   */
  public static readonly GFDL_1_1_ONLY = new SpdxLicense('GFDL-1.1-only');

  /**
   * GNU Free Documentation License v1.1 or later
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.1.txt
   */
  public static readonly GFDL_1_1_OR_LATER = new SpdxLicense('GFDL-1.1-or-later');

  /**
   * GNU Free Documentation License v1.2
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt
   */
  public static readonly GFDL_1_2 = new SpdxLicense('GFDL-1.2');

  /**
   * GNU Free Documentation License v1.2 only - invariants
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt
   */
  public static readonly GFDL_1_2_INVARIANTS_ONLY = new SpdxLicense('GFDL-1.2-invariants-only');

  /**
   * GNU Free Documentation License v1.2 or later - invariants
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt
   */
  public static readonly GFDL_1_2_INVARIANTS_OR_LATER = new SpdxLicense('GFDL-1.2-invariants-or-later');

  /**
   * GNU Free Documentation License v1.2 only - no invariants
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt
   */
  public static readonly GFDL_1_2_NO_INVARIANTS_ONLY = new SpdxLicense('GFDL-1.2-no-invariants-only');

  /**
   * GNU Free Documentation License v1.2 or later - no invariants
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt
   */
  public static readonly GFDL_1_2_NO_INVARIANTS_OR_LATER = new SpdxLicense('GFDL-1.2-no-invariants-or-later');

  /**
   * GNU Free Documentation License v1.2 only
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt
   */
  public static readonly GFDL_1_2_ONLY = new SpdxLicense('GFDL-1.2-only');

  /**
   * GNU Free Documentation License v1.2 or later
   *
   * @see https://www.gnu.org/licenses/old-licenses/fdl-1.2.txt
   */
  public static readonly GFDL_1_2_OR_LATER = new SpdxLicense('GFDL-1.2-or-later');

  /**
   * GNU Free Documentation License v1.3
   *
   * @see https://www.gnu.org/licenses/fdl-1.3.txt
   */
  public static readonly GFDL_1_3 = new SpdxLicense('GFDL-1.3');

  /**
   * GNU Free Documentation License v1.3 only - invariants
   *
   * @see https://www.gnu.org/licenses/fdl-1.3.txt
   */
  public static readonly GFDL_1_3_INVARIANTS_ONLY = new SpdxLicense('GFDL-1.3-invariants-only');

  /**
   * GNU Free Documentation License v1.3 or later - invariants
   *
   * @see https://www.gnu.org/licenses/fdl-1.3.txt
   */
  public static readonly GFDL_1_3_INVARIANTS_OR_LATER = new SpdxLicense('GFDL-1.3-invariants-or-later');

  /**
   * GNU Free Documentation License v1.3 only - no invariants
   *
   * @see https://www.gnu.org/licenses/fdl-1.3.txt
   */
  public static readonly GFDL_1_3_NO_INVARIANTS_ONLY = new SpdxLicense('GFDL-1.3-no-invariants-only');

  /**
   * GNU Free Documentation License v1.3 or later - no invariants
   *
   * @see https://www.gnu.org/licenses/fdl-1.3.txt
   */
  public static readonly GFDL_1_3_NO_INVARIANTS_OR_LATER = new SpdxLicense('GFDL-1.3-no-invariants-or-later');

  /**
   * GNU Free Documentation License v1.3 only
   *
   * @see https://www.gnu.org/licenses/fdl-1.3.txt
   */
  public static readonly GFDL_1_3_ONLY = new SpdxLicense('GFDL-1.3-only');

  /**
   * GNU Free Documentation License v1.3 or later
   *
   * @see https://www.gnu.org/licenses/fdl-1.3.txt
   */
  public static readonly GFDL_1_3_OR_LATER = new SpdxLicense('GFDL-1.3-or-later');

  /**
   * GL2PS License
   *
   * @see http://www.geuz.org/gl2ps/COPYING.GL2PS
   */
  public static readonly GL2_P_S = new SpdxLicense('GL2PS');

  /**
   * Good Luck With That Public License
   *
   * @see https://github.com/me-shaon/GLWTPL/commit/da5f6bc734095efbacb442c0b31e33a65b9d6e85
   */
  public static readonly GLWTPL = new SpdxLicense('GLWTPL');

  /**
   * GNU General Public License v1.0 only
   *
   * @see https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html
   */
  public static readonly GPL_1_0 = new SpdxLicense('GPL-1.0');

  /**
   * GNU General Public License v1.0 or later
   *
   * @see https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html
   */
  public static readonly GPL_1_0_PLUS = new SpdxLicense('GPL-1.0+');

  /**
   * GNU General Public License v1.0 only
   *
   * @see https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html
   */
  public static readonly GPL_1_0_ONLY = new SpdxLicense('GPL-1.0-only');

  /**
   * GNU General Public License v1.0 or later
   *
   * @see https://www.gnu.org/licenses/old-licenses/gpl-1.0-standalone.html
   */
  public static readonly GPL_1_0_OR_LATER = new SpdxLicense('GPL-1.0-or-later');

  /**
   * GNU General Public License v2.0 only
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html
   */
  public static readonly GPL_2_0 = new SpdxLicense('GPL-2.0');

  /**
   * GNU General Public License v2.0 or later
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html
   */
  public static readonly GPL_2_0_PLUS = new SpdxLicense('GPL-2.0+');

  /**
   * GNU General Public License v2.0 only
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html
   */
  public static readonly GPL_2_0_ONLY = new SpdxLicense('GPL-2.0-only');

  /**
   * GNU General Public License v2.0 or later
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html
   */
  public static readonly GPL_2_0_OR_LATER = new SpdxLicense('GPL-2.0-or-later');

  /**
   * GNU General Public License v2.0 w/GCC Runtime Library exception
   *
   * @see https://gcc.gnu.org/git/?p=gcc.git;a=blob;f=gcc/libgcc1.c;h=762f5143fc6eed57b6797c82710f3538aa52b40b;hb=cb143a3ce4fb417c68f5fa2691a1b1b1053dfba9#l10
   */
  public static readonly GPL_2_0_WITH_GCC_EXCEPTION = new SpdxLicense('GPL-2.0-with-GCC-exception');

  /**
   * GNU General Public License v2.0 w/Autoconf exception
   *
   * @see http://ac-archive.sourceforge.net/doc/copyright.html
   */
  public static readonly GPL_2_0_WITH_AUTOCONF_EXCEPTION = new SpdxLicense('GPL-2.0-with-autoconf-exception');

  /**
   * GNU General Public License v2.0 w/Bison exception
   *
   * @see http://git.savannah.gnu.org/cgit/bison.git/tree/data/yacc.c?id=193d7c7054ba7197b0789e14965b739162319b5e#n141
   */
  public static readonly GPL_2_0_WITH_BISON_EXCEPTION = new SpdxLicense('GPL-2.0-with-bison-exception');

  /**
   * GNU General Public License v2.0 w/Classpath exception
   *
   * @see https://www.gnu.org/software/classpath/license.html
   */
  public static readonly GPL_2_0_WITH_CLASSPATH_EXCEPTION = new SpdxLicense('GPL-2.0-with-classpath-exception');

  /**
   * GNU General Public License v2.0 w/Font exception
   *
   * @see https://www.gnu.org/licenses/gpl-faq.html#FontException
   */
  public static readonly GPL_2_0_WITH_FONT_EXCEPTION = new SpdxLicense('GPL-2.0-with-font-exception');

  /**
   * GNU General Public License v3.0 only
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/gpl-3.0-standalone.html
   */
  public static readonly GPL_3_0 = new SpdxLicense('GPL-3.0');

  /**
   * GNU General Public License v3.0 or later
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/gpl-3.0-standalone.html
   */
  public static readonly GPL_3_0_PLUS = new SpdxLicense('GPL-3.0+');

  /**
   * GNU General Public License v3.0 only
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/gpl-3.0-standalone.html
   */
  public static readonly GPL_3_0_ONLY = new SpdxLicense('GPL-3.0-only');

  /**
   * GNU General Public License v3.0 or later
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/gpl-3.0-standalone.html
   */
  public static readonly GPL_3_0_OR_LATER = new SpdxLicense('GPL-3.0-or-later');

  /**
   * GNU General Public License v3.0 w/GCC Runtime Library exception
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/gcc-exception-3.1.html
   */
  public static readonly GPL_3_0_WITH_GCC_EXCEPTION = new SpdxLicense('GPL-3.0-with-GCC-exception');

  /**
   * GNU General Public License v3.0 w/Autoconf exception
   *
   * @see https://www.gnu.org/licenses/autoconf-exception-3.0.html
   */
  public static readonly GPL_3_0_WITH_AUTOCONF_EXCEPTION = new SpdxLicense('GPL-3.0-with-autoconf-exception');

  /**
   * Giftware License
   *
   * @see http://liballeg.org/license.html#allegro-4-the-giftware-license
   */
  public static readonly GIFTWARE = new SpdxLicense('Giftware');

  /**
   * 3dfx Glide License
   *
   * @see http://www.users.on.net/~triforce/glidexp/COPYING.txt
   */
  public static readonly GLIDE = new SpdxLicense('Glide');

  /**
   * Glulxe License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Glulxe
   */
  public static readonly GLULXE = new SpdxLicense('Glulxe');

  /**
   * Historical Permission Notice and Disclaimer
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/HPND
   */
  public static readonly HPND = new SpdxLicense('HPND');

  /**
   * Historical Permission Notice and Disclaimer - sell variant
   *
   * @see https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/net/sunrpc/auth_gss/gss_generic_token.c?h=v4.19
   */
  public static readonly HPND_SELL_VARIANT = new SpdxLicense('HPND-sell-variant');

  /**
   * HTML Tidy License
   *
   * @see https://github.com/htacg/tidy-html5/blob/next/README/LICENSE.md
   */
  public static readonly HTMLTIDY = new SpdxLicense('HTMLTIDY');

  /**
   * Haskell Language Report License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Haskell_Language_Report_License
   */
  public static readonly HASKELL_REPORT = new SpdxLicense('HaskellReport');

  /**
   * Hippocratic License 2.1
   *
   * @see https://firstdonoharm.dev/version/2/1/license.html
   */
  public static readonly HIPPOCRATIC_2_1 = new SpdxLicense('Hippocratic-2.1');

  /**
   * IBM PowerPC Initialization and Boot Software
   *
   * @see http://git.denx.de/?p=u-boot.git;a=blob;f=arch/powerpc/cpu/ppc4xx/miiphy.c;h=297155fdafa064b955e53e9832de93bfb0cfb85b;hb=9fab4bf4cc077c21e43941866f3f2c196f28670d
   */
  public static readonly IBM_PIBS = new SpdxLicense('IBM-pibs');

  /**
   * ICU License
   *
   * @see http://source.icu-project.org/repos/icu/icu/trunk/license.html
   */
  public static readonly ICU = new SpdxLicense('ICU');

  /**
   * Independent JPEG Group License
   *
   * @see http://dev.w3.org/cvsweb/Amaya/libjpeg/Attic/README?rev=1.2
   */
  public static readonly IJG = new SpdxLicense('IJG');

  /**
   * IPA Font License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/IPA
   */
  public static readonly IPA = new SpdxLicense('IPA');

  /**
   * IBM Public License v1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/IPL-1.0
   */
  public static readonly IPL_1_0 = new SpdxLicense('IPL-1.0');

  /**
   * ISC License
   *
   * @osiApproved
   *
   * @see https://www.isc.org/downloads/software-support-policy/isc-license/
   */
  public static readonly ISC = new SpdxLicense('ISC');

  /**
   * ImageMagick License
   *
   * @see http://www.imagemagick.org/script/license.php
   */
  public static readonly IMAGE_MAGICK = new SpdxLicense('ImageMagick');

  /**
   * Imlib2 License
   *
   * @see http://trac.enlightenment.org/e/browser/trunk/imlib2/COPYING
   */
  public static readonly IMLIB2 = new SpdxLicense('Imlib2');

  /**
   * Info-ZIP License
   *
   * @see http://www.info-zip.org/license.html
   */
  public static readonly INFO_ZIP = new SpdxLicense('Info-ZIP');

  /**
   * Intel Open Source License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Intel
   */
  public static readonly INTEL = new SpdxLicense('Intel');

  /**
   * Intel ACPI Software License Agreement
   *
   * @see https://fedoraproject.org/wiki/Licensing/Intel_ACPI_Software_License_Agreement
   */
  public static readonly INTEL_ACPI = new SpdxLicense('Intel-ACPI');

  /**
   * Interbase Public License v1.0
   *
   * @see https://web.archive.org/web/20060319014854/http://info.borland.com/devsupport/interbase/opensource/IPL.html
   */
  public static readonly INTERBASE_1_0 = new SpdxLicense('Interbase-1.0');

  /**
   * Japan Network Information Center License
   *
   * @see https://gitlab.isc.org/isc-projects/bind9/blob/master/COPYRIGHT#L366
   */
  public static readonly JPNIC = new SpdxLicense('JPNIC');

  /**
   * JSON License
   *
   * @see http://www.json.org/license.html
   */
  public static readonly JSON = new SpdxLicense('JSON');

  /**
   * JasPer License
   *
   * @see http://www.ece.uvic.ca/~mdadams/jasper/LICENSE
   */
  public static readonly JASPER_2_0 = new SpdxLicense('JasPer-2.0');

  /**
   * Licence Art Libre 1.2
   *
   * @see http://artlibre.org/licence/lal/licence-art-libre-12/
   */
  public static readonly LAL_1_2 = new SpdxLicense('LAL-1.2');

  /**
   * Licence Art Libre 1.3
   *
   * @see https://artlibre.org/
   */
  public static readonly LAL_1_3 = new SpdxLicense('LAL-1.3');

  /**
   * GNU Library General Public License v2 only
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html
   */
  public static readonly LGPL_2_0 = new SpdxLicense('LGPL-2.0');

  /**
   * GNU Library General Public License v2 or later
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html
   */
  public static readonly LGPL_2_0_PLUS = new SpdxLicense('LGPL-2.0+');

  /**
   * GNU Library General Public License v2 only
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html
   */
  public static readonly LGPL_2_0_ONLY = new SpdxLicense('LGPL-2.0-only');

  /**
   * GNU Library General Public License v2 or later
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/lgpl-2.0-standalone.html
   */
  public static readonly LGPL_2_0_OR_LATER = new SpdxLicense('LGPL-2.0-or-later');

  /**
   * GNU Lesser General Public License v2.1 only
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html
   */
  public static readonly LGPL_2_1 = new SpdxLicense('LGPL-2.1');

  /**
   * GNU Library General Public License v2.1 or later
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html
   */
  public static readonly LGPL_2_1_PLUS = new SpdxLicense('LGPL-2.1+');

  /**
   * GNU Lesser General Public License v2.1 only
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html
   */
  public static readonly LGPL_2_1_ONLY = new SpdxLicense('LGPL-2.1-only');

  /**
   * GNU Lesser General Public License v2.1 or later
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/old-licenses/lgpl-2.1-standalone.html
   */
  public static readonly LGPL_2_1_OR_LATER = new SpdxLicense('LGPL-2.1-or-later');

  /**
   * GNU Lesser General Public License v3.0 only
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/lgpl-3.0-standalone.html
   */
  public static readonly LGPL_3_0 = new SpdxLicense('LGPL-3.0');

  /**
   * GNU Lesser General Public License v3.0 or later
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/lgpl-3.0-standalone.html
   */
  public static readonly LGPL_3_0_PLUS = new SpdxLicense('LGPL-3.0+');

  /**
   * GNU Lesser General Public License v3.0 only
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/lgpl-3.0-standalone.html
   */
  public static readonly LGPL_3_0_ONLY = new SpdxLicense('LGPL-3.0-only');

  /**
   * GNU Lesser General Public License v3.0 or later
   *
   * @osiApproved
   *
   * @see https://www.gnu.org/licenses/lgpl-3.0-standalone.html
   */
  public static readonly LGPL_3_0_OR_LATER = new SpdxLicense('LGPL-3.0-or-later');

  /**
   * Lesser General Public License For Linguistic Resources
   *
   * @see http://www-igm.univ-mlv.fr/~unitex/lgpllr.html
   */
  public static readonly LGPLLR = new SpdxLicense('LGPLLR');

  /**
   * Lucent Public License Version 1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/LPL-1.0
   */
  public static readonly LPL_1_0 = new SpdxLicense('LPL-1.0');

  /**
   * Lucent Public License v1.02
   *
   * @osiApproved
   *
   * @see http://plan9.bell-labs.com/plan9/license.html
   */
  public static readonly LPL_1_02 = new SpdxLicense('LPL-1.02');

  /**
   * LaTeX Project Public License v1.0
   *
   * @see http://www.latex-project.org/lppl/lppl-1-0.txt
   */
  public static readonly LPPL_1_0 = new SpdxLicense('LPPL-1.0');

  /**
   * LaTeX Project Public License v1.1
   *
   * @see http://www.latex-project.org/lppl/lppl-1-1.txt
   */
  public static readonly LPPL_1_1 = new SpdxLicense('LPPL-1.1');

  /**
   * LaTeX Project Public License v1.2
   *
   * @see http://www.latex-project.org/lppl/lppl-1-2.txt
   */
  public static readonly LPPL_1_2 = new SpdxLicense('LPPL-1.2');

  /**
   * LaTeX Project Public License v1.3a
   *
   * @see http://www.latex-project.org/lppl/lppl-1-3a.txt
   */
  public static readonly LPPL_1_3A = new SpdxLicense('LPPL-1.3a');

  /**
   * LaTeX Project Public License v1.3c
   *
   * @osiApproved
   *
   * @see http://www.latex-project.org/lppl/lppl-1-3c.txt
   */
  public static readonly LPPL_1_3C = new SpdxLicense('LPPL-1.3c');

  /**
   * Latex2e License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Latex2e
   */
  public static readonly LATEX2_E = new SpdxLicense('Latex2e');

  /**
   * Leptonica License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Leptonica
   */
  public static readonly LEPTONICA = new SpdxLicense('Leptonica');

  /**
   * Licence Libre du Québec – Permissive version 1.1
   *
   * @osiApproved
   *
   * @see https://forge.gouv.qc.ca/licence/fr/liliq-v1-1/
   */
  public static readonly LILIQ_P_1_1 = new SpdxLicense('LiLiQ-P-1.1');

  /**
   * Licence Libre du Québec – Réciprocité version 1.1
   *
   * @osiApproved
   *
   * @see https://www.forge.gouv.qc.ca/participez/licence-logicielle/licence-libre-du-quebec-liliq-en-francais/licence-libre-du-quebec-reciprocite-liliq-r-v1-1/
   */
  public static readonly LILIQ_R_1_1 = new SpdxLicense('LiLiQ-R-1.1');

  /**
   * Licence Libre du Québec – Réciprocité forte version 1.1
   *
   * @osiApproved
   *
   * @see https://www.forge.gouv.qc.ca/participez/licence-logicielle/licence-libre-du-quebec-liliq-en-francais/licence-libre-du-quebec-reciprocite-forte-liliq-r-v1-1/
   */
  public static readonly LILIQ_RPLUS_1_1 = new SpdxLicense('LiLiQ-Rplus-1.1');

  /**
   * libpng License
   *
   * @see http://www.libpng.org/pub/png/src/libpng-LICENSE.txt
   */
  public static readonly LIBPNG = new SpdxLicense('Libpng');

  /**
   * Linux Kernel Variant of OpenIB.org license
   *
   * @see https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/drivers/infiniband/core/sa.h
   */
  public static readonly LINUX_OPENIB = new SpdxLicense('Linux-OpenIB');

  /**
   * MIT License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/MIT
   */
  public static readonly MIT = new SpdxLicense('MIT');

  /**
   * MIT No Attribution
   *
   * @osiApproved
   *
   * @see https://github.com/aws/mit-0
   */
  public static readonly MIT_0 = new SpdxLicense('MIT-0');

  /**
   * CMU License
   *
   * @see https://fedoraproject.org/wiki/Licensing:MIT?rd=Licensing/MIT#CMU_Style
   */
  public static readonly MIT_CMU = new SpdxLicense('MIT-CMU');

  /**
   * Enlightenment License (e16)
   *
   * @see https://fedoraproject.org/wiki/Licensing/MIT_With_Advertising
   */
  public static readonly MIT_ADVERTISING = new SpdxLicense('MIT-advertising');

  /**
   * enna License
   *
   * @see https://fedoraproject.org/wiki/Licensing/MIT#enna
   */
  public static readonly MIT_ENNA = new SpdxLicense('MIT-enna');

  /**
   * feh License
   *
   * @see https://fedoraproject.org/wiki/Licensing/MIT#feh
   */
  public static readonly MIT_FEH = new SpdxLicense('MIT-feh');

  /**
   * MIT Open Group variant
   *
   * @see https://gitlab.freedesktop.org/xorg/app/iceauth/-/blob/master/COPYING
   */
  public static readonly MIT_OPEN_GROUP = new SpdxLicense('MIT-open-group');

  /**
   * MIT +no-false-attribs license
   *
   * @see https://fedoraproject.org/wiki/Licensing/MITNFA
   */
  public static readonly MITNFA = new SpdxLicense('MITNFA');

  /**
   * Mozilla Public License 1.0
   *
   * @osiApproved
   *
   * @see http://www.mozilla.org/MPL/MPL-1.0.html
   */
  public static readonly MPL_1_0 = new SpdxLicense('MPL-1.0');

  /**
   * Mozilla Public License 1.1
   *
   * @osiApproved
   *
   * @see http://www.mozilla.org/MPL/MPL-1.1.html
   */
  public static readonly MPL_1_1 = new SpdxLicense('MPL-1.1');

  /**
   * Mozilla Public License 2.0
   *
   * @osiApproved
   *
   * @see http://www.mozilla.org/MPL/2.0/
   */
  public static readonly MPL_2_0 = new SpdxLicense('MPL-2.0');

  /**
   * Mozilla Public License 2.0 (no copyleft exception)
   *
   * @osiApproved
   *
   * @see http://www.mozilla.org/MPL/2.0/
   */
  public static readonly MPL_2_0_NO_COPYLEFT_EXCEPTION = new SpdxLicense('MPL-2.0-no-copyleft-exception');

  /**
   * Microsoft Public License
   *
   * @osiApproved
   *
   * @see http://www.microsoft.com/opensource/licenses.mspx
   */
  public static readonly MS_PL = new SpdxLicense('MS-PL');

  /**
   * Microsoft Reciprocal License
   *
   * @osiApproved
   *
   * @see http://www.microsoft.com/opensource/licenses.mspx
   */
  public static readonly MS_RL = new SpdxLicense('MS-RL');

  /**
   * Matrix Template Library License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Matrix_Template_Library_License
   */
  public static readonly MTLL = new SpdxLicense('MTLL');

  /**
   * MakeIndex License
   *
   * @see https://fedoraproject.org/wiki/Licensing/MakeIndex
   */
  public static readonly MAKE_INDEX = new SpdxLicense('MakeIndex');

  /**
   * The MirOS Licence
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/MirOS
   */
  public static readonly MIR_O_S = new SpdxLicense('MirOS');

  /**
   * Motosoto License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Motosoto
   */
  public static readonly MOTOSOTO = new SpdxLicense('Motosoto');

  /**
   * Mulan Permissive Software License, Version 1
   *
   * @see https://license.coscl.org.cn/MulanPSL/
   */
  public static readonly MULANPSL_1_0 = new SpdxLicense('MulanPSL-1.0');

  /**
   * Mulan Permissive Software License, Version 2
   *
   * @osiApproved
   *
   * @see https://license.coscl.org.cn/MulanPSL2/
   */
  public static readonly MULANPSL_2_0 = new SpdxLicense('MulanPSL-2.0');

  /**
   * Multics License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Multics
   */
  public static readonly MULTICS = new SpdxLicense('Multics');

  /**
   * Mup License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Mup
   */
  public static readonly MUP = new SpdxLicense('Mup');

  /**
   * NASA Open Source Agreement 1.3
   *
   * @osiApproved
   *
   * @see http://ti.arc.nasa.gov/opensource/nosa/
   */
  public static readonly NASA_1_3 = new SpdxLicense('NASA-1.3');

  /**
   * Net Boolean Public License v1
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=37b4b3f6cc4bf34e1d3dec61e69914b9819d8894
   */
  public static readonly NBPL_1_0 = new SpdxLicense('NBPL-1.0');

  /**
   * Non-Commercial Government Licence
   *
   * @see https://github.com/spdx/license-list-XML/blob/master/src/Apache-2.0.xml
   */
  public static readonly NCGL_UK_2_0 = new SpdxLicense('NCGL-UK-2.0');

  /**
   * University of Illinois/NCSA Open Source License
   *
   * @osiApproved
   *
   * @see http://otm.illinois.edu/uiuc_openSource
   */
  public static readonly NCSA = new SpdxLicense('NCSA');

  /**
   * Nethack General Public License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/NGPL
   */
  public static readonly NGPL = new SpdxLicense('NGPL');

  /**
   * NIST Public Domain Notice
   *
   * @see https://github.com/tcheneau/simpleRPL/blob/e645e69e38dd4e3ccfeceb2db8cba05b7c2e0cd3/LICENSE.txt
   */
  public static readonly NIST_PD = new SpdxLicense('NIST-PD');

  /**
   * NIST Public Domain Notice with license fallback
   *
   * @see https://github.com/usnistgov/jsip/blob/59700e6926cbe96c5cdae897d9a7d2656b42abe3/LICENSE
   */
  public static readonly NIST_PD_FALLBACK = new SpdxLicense('NIST-PD-fallback');

  /**
   * Norwegian Licence for Open Government Data
   *
   * @see http://data.norge.no/nlod/en/1.0
   */
  public static readonly NLOD_1_0 = new SpdxLicense('NLOD-1.0');

  /**
   * No Limit Public License
   *
   * @see https://fedoraproject.org/wiki/Licensing/NLPL
   */
  public static readonly NLPL = new SpdxLicense('NLPL');

  /**
   * Netizen Open Source License
   *
   * @see http://bits.netizen.com.au/licenses/NOSL/nosl.txt
   */
  public static readonly NOSL = new SpdxLicense('NOSL');

  /**
   * Netscape Public License v1.0
   *
   * @see http://www.mozilla.org/MPL/NPL/1.0/
   */
  public static readonly NPL_1_0 = new SpdxLicense('NPL-1.0');

  /**
   * Netscape Public License v1.1
   *
   * @see http://www.mozilla.org/MPL/NPL/1.1/
   */
  public static readonly NPL_1_1 = new SpdxLicense('NPL-1.1');

  /**
   * Non-Profit Open Software License 3.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/NOSL3.0
   */
  public static readonly NPOSL_3_0 = new SpdxLicense('NPOSL-3.0');

  /**
   * NRL License
   *
   * @see http://web.mit.edu/network/isakmp/nrllicense.html
   */
  public static readonly NRL = new SpdxLicense('NRL');

  /**
   * NTP License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/NTP
   */
  public static readonly NTP = new SpdxLicense('NTP');

  /**
   * NTP No Attribution
   *
   * @see https://github.com/tytso/e2fsprogs/blob/master/lib/et/et_name.c
   */
  public static readonly NTP_0 = new SpdxLicense('NTP-0');

  /**
   * Naumen Public License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Naumen
   */
  public static readonly NAUMEN = new SpdxLicense('Naumen');

  /**
   * Net-SNMP License
   *
   * @see http://net-snmp.sourceforge.net/about/license.html
   */
  public static readonly NET_SNMP = new SpdxLicense('Net-SNMP');

  /**
   * NetCDF license
   *
   * @see http://www.unidata.ucar.edu/software/netcdf/copyright.html
   */
  public static readonly NET_CD_F = new SpdxLicense('NetCDF');

  /**
   * Newsletr License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Newsletr
   */
  public static readonly NEWSLETR = new SpdxLicense('Newsletr');

  /**
   * Nokia Open Source License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/nokia
   */
  public static readonly NOKIA = new SpdxLicense('Nokia');

  /**
   * Noweb License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Noweb
   */
  public static readonly NOWEB = new SpdxLicense('Noweb');

  /**
   * Nunit License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Nunit
   */
  public static readonly NUNIT = new SpdxLicense('Nunit');

  /**
   * Open Use of Data Agreement v1.0
   *
   * @see https://github.com/microsoft/Open-Use-of-Data-Agreement/blob/v1.0/O-UDA-1.0.md
   */
  public static readonly O_UDA_1_0 = new SpdxLicense('O-UDA-1.0');

  /**
   * Open CASCADE Technology Public License
   *
   * @see http://www.opencascade.com/content/occt-public-license
   */
  public static readonly OCCT_PL = new SpdxLicense('OCCT-PL');

  /**
   * OCLC Research Public License 2.0
   *
   * @osiApproved
   *
   * @see http://www.oclc.org/research/activities/software/license/v2final.htm
   */
  public static readonly OCLC_2_0 = new SpdxLicense('OCLC-2.0');

  /**
   * Open Data Commons Attribution License v1.0
   *
   * @see https://opendatacommons.org/licenses/by/1.0/
   */
  public static readonly ODC_BY_1_0 = new SpdxLicense('ODC-By-1.0');

  /**
   * ODC Open Database License v1.0
   *
   * @see http://www.opendatacommons.org/licenses/odbl/1.0/
   */
  public static readonly ODBL_1_0 = new SpdxLicense('ODbL-1.0');

  /**
   * SIL Open Font License 1.0
   *
   * @see http://scripts.sil.org/cms/scripts/page.php?item_id=OFL10_web
   */
  public static readonly OFL_1_0 = new SpdxLicense('OFL-1.0');

  /**
   * SIL Open Font License 1.0 with Reserved Font Name
   *
   * @see http://scripts.sil.org/cms/scripts/page.php?item_id=OFL10_web
   */
  public static readonly OFL_1_0_RFN = new SpdxLicense('OFL-1.0-RFN');

  /**
   * SIL Open Font License 1.0 with no Reserved Font Name
   *
   * @see http://scripts.sil.org/cms/scripts/page.php?item_id=OFL10_web
   */
  public static readonly OFL_1_0_NO_RFN = new SpdxLicense('OFL-1.0-no-RFN');

  /**
   * SIL Open Font License 1.1
   *
   * @osiApproved
   *
   * @see http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web
   */
  public static readonly OFL_1_1 = new SpdxLicense('OFL-1.1');

  /**
   * SIL Open Font License 1.1 with Reserved Font Name
   *
   * @osiApproved
   *
   * @see http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web
   */
  public static readonly OFL_1_1_RFN = new SpdxLicense('OFL-1.1-RFN');

  /**
   * SIL Open Font License 1.1 with no Reserved Font Name
   *
   * @osiApproved
   *
   * @see http://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web
   */
  public static readonly OFL_1_1_NO_RFN = new SpdxLicense('OFL-1.1-no-RFN');

  /**
   * OGC Software License, Version 1.0
   *
   * @see https://www.ogc.org/ogc/software/1.0
   */
  public static readonly OGC_1_0 = new SpdxLicense('OGC-1.0');

  /**
   * Open Government Licence - Canada
   *
   * @see https://open.canada.ca/en/open-government-licence-canada
   */
  public static readonly OGL_CANADA_2_0 = new SpdxLicense('OGL-Canada-2.0');

  /**
   * Open Government Licence v1.0
   *
   * @see http://www.nationalarchives.gov.uk/doc/open-government-licence/version/1/
   */
  public static readonly OGL_UK_1_0 = new SpdxLicense('OGL-UK-1.0');

  /**
   * Open Government Licence v2.0
   *
   * @see http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/
   */
  public static readonly OGL_UK_2_0 = new SpdxLicense('OGL-UK-2.0');

  /**
   * Open Government Licence v3.0
   *
   * @see http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
   */
  public static readonly OGL_UK_3_0 = new SpdxLicense('OGL-UK-3.0');

  /**
   * Open Group Test Suite License
   *
   * @osiApproved
   *
   * @see http://www.opengroup.org/testing/downloads/The_Open_Group_TSL.txt
   */
  public static readonly OGTSL = new SpdxLicense('OGTSL');

  /**
   * Open LDAP Public License v1.1
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=806557a5ad59804ef3a44d5abfbe91d706b0791f
   */
  public static readonly OLDAP_1_1 = new SpdxLicense('OLDAP-1.1');

  /**
   * Open LDAP Public License v1.2
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=42b0383c50c299977b5893ee695cf4e486fb0dc7
   */
  public static readonly OLDAP_1_2 = new SpdxLicense('OLDAP-1.2');

  /**
   * Open LDAP Public License v1.3
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=e5f8117f0ce088d0bd7a8e18ddf37eaa40eb09b1
   */
  public static readonly OLDAP_1_3 = new SpdxLicense('OLDAP-1.3');

  /**
   * Open LDAP Public License v1.4
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=c9f95c2f3f2ffb5e0ae55fe7388af75547660941
   */
  public static readonly OLDAP_1_4 = new SpdxLicense('OLDAP-1.4');

  /**
   * Open LDAP Public License v2.0 (or possibly 2.0A and 2.0B)
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=cbf50f4e1185a21abd4c0a54d3f4341fe28f36ea
   */
  public static readonly OLDAP_2_0 = new SpdxLicense('OLDAP-2.0');

  /**
   * Open LDAP Public License v2.0.1
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=b6d68acd14e51ca3aab4428bf26522aa74873f0e
   */
  public static readonly OLDAP_2_0_1 = new SpdxLicense('OLDAP-2.0.1');

  /**
   * Open LDAP Public License v2.1
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=b0d176738e96a0d3b9f85cb51e140a86f21be715
   */
  public static readonly OLDAP_2_1 = new SpdxLicense('OLDAP-2.1');

  /**
   * Open LDAP Public License v2.2
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=470b0c18ec67621c85881b2733057fecf4a1acc3
   */
  public static readonly OLDAP_2_2 = new SpdxLicense('OLDAP-2.2');

  /**
   * Open LDAP Public License v2.2.1
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=4bc786f34b50aa301be6f5600f58a980070f481e
   */
  public static readonly OLDAP_2_2_1 = new SpdxLicense('OLDAP-2.2.1');

  /**
   * Open LDAP Public License 2.2.2
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=df2cc1e21eb7c160695f5b7cffd6296c151ba188
   */
  public static readonly OLDAP_2_2_2 = new SpdxLicense('OLDAP-2.2.2');

  /**
   * Open LDAP Public License v2.3
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=d32cf54a32d581ab475d23c810b0a7fbaf8d63c3
   */
  public static readonly OLDAP_2_3 = new SpdxLicense('OLDAP-2.3');

  /**
   * Open LDAP Public License v2.4
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=cd1284c4a91a8a380d904eee68d1583f989ed386
   */
  public static readonly OLDAP_2_4 = new SpdxLicense('OLDAP-2.4');

  /**
   * Open LDAP Public License v2.5
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=6852b9d90022e8593c98205413380536b1b5a7cf
   */
  public static readonly OLDAP_2_5 = new SpdxLicense('OLDAP-2.5');

  /**
   * Open LDAP Public License v2.6
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=1cae062821881f41b73012ba816434897abf4205
   */
  public static readonly OLDAP_2_6 = new SpdxLicense('OLDAP-2.6');

  /**
   * Open LDAP Public License v2.7
   *
   * @see http://www.openldap.org/devel/gitweb.cgi?p=openldap.git;a=blob;f=LICENSE;hb=47c2415c1df81556eeb39be6cad458ef87c534a2
   */
  public static readonly OLDAP_2_7 = new SpdxLicense('OLDAP-2.7');

  /**
   * Open LDAP Public License v2.8
   *
   * @osiApproved
   *
   * @see http://www.openldap.org/software/release/license.html
   */
  public static readonly OLDAP_2_8 = new SpdxLicense('OLDAP-2.8');

  /**
   * Open Market License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Open_Market_License
   */
  public static readonly OML = new SpdxLicense('OML');

  /**
   * Open Public License v1.0
   *
   * @see http://old.koalateam.com/jackaroo/OPL_1_0.TXT
   */
  public static readonly OPL_1_0 = new SpdxLicense('OPL-1.0');

  /**
   * OSET Public License version 2.1
   *
   * @osiApproved
   *
   * @see http://www.osetfoundation.org/public-license
   */
  public static readonly OSET_PL_2_1 = new SpdxLicense('OSET-PL-2.1');

  /**
   * Open Software License 1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/OSL-1.0
   */
  public static readonly OSL_1_0 = new SpdxLicense('OSL-1.0');

  /**
   * Open Software License 1.1
   *
   * @see https://fedoraproject.org/wiki/Licensing/OSL1.1
   */
  public static readonly OSL_1_1 = new SpdxLicense('OSL-1.1');

  /**
   * Open Software License 2.0
   *
   * @osiApproved
   *
   * @see http://web.archive.org/web/20041020171434/http://www.rosenlaw.com/osl2.0.html
   */
  public static readonly OSL_2_0 = new SpdxLicense('OSL-2.0');

  /**
   * Open Software License 2.1
   *
   * @osiApproved
   *
   * @see http://web.archive.org/web/20050212003940/http://www.rosenlaw.com/osl21.htm
   */
  public static readonly OSL_2_1 = new SpdxLicense('OSL-2.1');

  /**
   * Open Software License 3.0
   *
   * @osiApproved
   *
   * @see https://web.archive.org/web/20120101081418/http://rosenlaw.com:80/OSL3.0.htm
   */
  public static readonly OSL_3_0 = new SpdxLicense('OSL-3.0');

  /**
   * OpenSSL License
   *
   * @see http://www.openssl.org/source/license.html
   */
  public static readonly OPEN_SS_L = new SpdxLicense('OpenSSL');

  /**
   * ODC Public Domain Dedication & License 1.0
   *
   * @see http://opendatacommons.org/licenses/pddl/1.0/
   */
  public static readonly PDDL_1_0 = new SpdxLicense('PDDL-1.0');

  /**
   * PHP License v3.0
   *
   * @osiApproved
   *
   * @see http://www.php.net/license/3_0.txt
   */
  public static readonly PHP_3_0 = new SpdxLicense('PHP-3.0');

  /**
   * PHP License v3.01
   *
   * @osiApproved
   *
   * @see http://www.php.net/license/3_01.txt
   */
  public static readonly PHP_3_01 = new SpdxLicense('PHP-3.01');

  /**
   * Python Software Foundation License 2.0
   *
   * @see https://opensource.org/licenses/Python-2.0
   */
  public static readonly PSF_2_0 = new SpdxLicense('PSF-2.0');

  /**
   * The Parity Public License 6.0.0
   *
   * @see https://paritylicense.com/versions/6.0.0.html
   */
  public static readonly PARITY_6_0_0 = new SpdxLicense('Parity-6.0.0');

  /**
   * The Parity Public License 7.0.0
   *
   * @see https://paritylicense.com/versions/7.0.0.html
   */
  public static readonly PARITY_7_0_0 = new SpdxLicense('Parity-7.0.0');

  /**
   * Plexus Classworlds License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Plexus_Classworlds_License
   */
  public static readonly PLEXUS = new SpdxLicense('Plexus');

  /**
   * PolyForm Noncommercial License 1.0.0
   *
   * @see https://polyformproject.org/licenses/noncommercial/1.0.0
   */
  public static readonly POLYFORM_NONCOMMERCIAL_1_0_0 = new SpdxLicense('PolyForm-Noncommercial-1.0.0');

  /**
   * PolyForm Small Business License 1.0.0
   *
   * @see https://polyformproject.org/licenses/small-business/1.0.0
   */
  public static readonly POLYFORM_SMALL_BUSINESS_1_0_0 = new SpdxLicense('PolyForm-Small-Business-1.0.0');

  /**
   * PostgreSQL License
   *
   * @osiApproved
   *
   * @see http://www.postgresql.org/about/licence
   */
  public static readonly POSTGRE_SQ_L = new SpdxLicense('PostgreSQL');

  /**
   * Python License 2.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Python-2.0
   */
  public static readonly PYTHON_2_0 = new SpdxLicense('Python-2.0');

  /**
   * Q Public License 1.0
   *
   * @osiApproved
   *
   * @see http://doc.qt.nokia.com/3.3/license.html
   */
  public static readonly QPL_1_0 = new SpdxLicense('QPL-1.0');

  /**
   * Qhull License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Qhull
   */
  public static readonly QHULL = new SpdxLicense('Qhull');

  /**
   * Red Hat eCos Public License v1.1
   *
   * @see http://ecos.sourceware.org/old-license.html
   */
  public static readonly RHECOS_1_1 = new SpdxLicense('RHeCos-1.1');

  /**
   * Reciprocal Public License 1.1
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/RPL-1.1
   */
  public static readonly RPL_1_1 = new SpdxLicense('RPL-1.1');

  /**
   * Reciprocal Public License 1.5
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/RPL-1.5
   */
  public static readonly RPL_1_5 = new SpdxLicense('RPL-1.5');

  /**
   * RealNetworks Public Source License v1.0
   *
   * @osiApproved
   *
   * @see https://helixcommunity.org/content/rpsl
   */
  public static readonly RPSL_1_0 = new SpdxLicense('RPSL-1.0');

  /**
   * RSA Message-Digest License
   *
   * @see http://www.faqs.org/rfcs/rfc1321.html
   */
  public static readonly RSA_MD = new SpdxLicense('RSA-MD');

  /**
   * Ricoh Source Code Public License
   *
   * @osiApproved
   *
   * @see http://wayback.archive.org/web/20060715140826/http://www.risource.org/RPL/RPL-1.0A.shtml
   */
  public static readonly RSCPL = new SpdxLicense('RSCPL');

  /**
   * Rdisc License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Rdisc_License
   */
  public static readonly RDISC = new SpdxLicense('Rdisc');

  /**
   * Ruby License
   *
   * @see http://www.ruby-lang.org/en/LICENSE.txt
   */
  public static readonly RUBY = new SpdxLicense('Ruby');

  /**
   * Sax Public Domain Notice
   *
   * @see http://www.saxproject.org/copying.html
   */
  public static readonly SAX_PD = new SpdxLicense('SAX-PD');

  /**
   * SCEA Shared Source License
   *
   * @see http://research.scea.com/scea_shared_source_license.html
   */
  public static readonly SCEA = new SpdxLicense('SCEA');

  /**
   * SGI Free Software License B v1.0
   *
   * @see http://oss.sgi.com/projects/FreeB/SGIFreeSWLicB.1.0.html
   */
  public static readonly SGI_B_1_0 = new SpdxLicense('SGI-B-1.0');

  /**
   * SGI Free Software License B v1.1
   *
   * @see http://oss.sgi.com/projects/FreeB/
   */
  public static readonly SGI_B_1_1 = new SpdxLicense('SGI-B-1.1');

  /**
   * SGI Free Software License B v2.0
   *
   * @see http://oss.sgi.com/projects/FreeB/SGIFreeSWLicB.2.0.pdf
   */
  public static readonly SGI_B_2_0 = new SpdxLicense('SGI-B-2.0');

  /**
   * Solderpad Hardware License v0.5
   *
   * @see https://solderpad.org/licenses/SHL-0.5/
   */
  public static readonly SHL_0_5 = new SpdxLicense('SHL-0.5');

  /**
   * Solderpad Hardware License, Version 0.51
   *
   * @see https://solderpad.org/licenses/SHL-0.51/
   */
  public static readonly SHL_0_51 = new SpdxLicense('SHL-0.51');

  /**
   * Sun Industry Standards Source License v1.1
   *
   * @osiApproved
   *
   * @see http://www.openoffice.org/licenses/sissl_license.html
   */
  public static readonly SISSL = new SpdxLicense('SISSL');

  /**
   * Sun Industry Standards Source License v1.2
   *
   * @see http://gridscheduler.sourceforge.net/Gridengine_SISSL_license.html
   */
  public static readonly SISSL_1_2 = new SpdxLicense('SISSL-1.2');

  /**
   * Standard ML of New Jersey License
   *
   * @see https://www.smlnj.org/license.html
   */
  public static readonly SMLNJ = new SpdxLicense('SMLNJ');

  /**
   * Secure Messaging Protocol Public License
   *
   * @see https://github.com/dcblake/SMP/blob/master/Documentation/License.txt
   */
  public static readonly SMPPL = new SpdxLicense('SMPPL');

  /**
   * SNIA Public License 1.1
   *
   * @see https://fedoraproject.org/wiki/Licensing/SNIA_Public_License
   */
  public static readonly SNIA = new SpdxLicense('SNIA');

  /**
   * Sun Public License v1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/SPL-1.0
   */
  public static readonly SPL_1_0 = new SpdxLicense('SPL-1.0');

  /**
   * SSH OpenSSH license
   *
   * @see https://github.com/openssh/openssh-portable/blob/1b11ea7c58cd5c59838b5fa574cd456d6047b2d4/LICENCE#L10
   */
  public static readonly SSH_OPENSSH = new SpdxLicense('SSH-OpenSSH');

  /**
   * SSH short notice
   *
   * @see https://github.com/openssh/openssh-portable/blob/1b11ea7c58cd5c59838b5fa574cd456d6047b2d4/pathnames.h
   */
  public static readonly SSH_SHORT = new SpdxLicense('SSH-short');

  /**
   * Server Side Public License, v 1
   *
   * @see https://www.mongodb.com/licensing/server-side-public-license
   */
  public static readonly SSPL_1_0 = new SpdxLicense('SSPL-1.0');

  /**
   * Scheme Widget Library (SWL) Software License Agreement
   *
   * @see https://fedoraproject.org/wiki/Licensing/SWL
   */
  public static readonly SWL = new SpdxLicense('SWL');

  /**
   * Saxpath License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Saxpath_License
   */
  public static readonly SAXPATH = new SpdxLicense('Saxpath');

  /**
   * Sendmail License
   *
   * @see http://www.sendmail.com/pdfs/open_source/sendmail_license.pdf
   */
  public static readonly SENDMAIL = new SpdxLicense('Sendmail');

  /**
   * Sendmail License 8.23
   *
   * @see https://www.proofpoint.com/sites/default/files/sendmail-license.pdf
   */
  public static readonly SENDMAIL_8_23 = new SpdxLicense('Sendmail-8.23');

  /**
   * Simple Public License 2.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/SimPL-2.0
   */
  public static readonly SIMPL_2_0 = new SpdxLicense('SimPL-2.0');

  /**
   * Sleepycat License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Sleepycat
   */
  public static readonly SLEEPYCAT = new SpdxLicense('Sleepycat');

  /**
   * Spencer License 86
   *
   * @see https://fedoraproject.org/wiki/Licensing/Henry_Spencer_Reg-Ex_Library_License
   */
  public static readonly SPENCER_86 = new SpdxLicense('Spencer-86');

  /**
   * Spencer License 94
   *
   * @see https://fedoraproject.org/wiki/Licensing/Henry_Spencer_Reg-Ex_Library_License
   */
  public static readonly SPENCER_94 = new SpdxLicense('Spencer-94');

  /**
   * Spencer License 99
   *
   * @see http://www.opensource.apple.com/source/tcl/tcl-5/tcl/generic/regfronts.c
   */
  public static readonly SPENCER_99 = new SpdxLicense('Spencer-99');

  /**
   * Standard ML of New Jersey License
   *
   * @see http://www.smlnj.org//license.html
   */
  public static readonly STANDARDML_NJ = new SpdxLicense('StandardML-NJ');

  /**
   * SugarCRM Public License v1.1.3
   *
   * @see http://www.sugarcrm.com/crm/SPL
   */
  public static readonly SUGARCRM_1_1_3 = new SpdxLicense('SugarCRM-1.1.3');

  /**
   * TAPR Open Hardware License v1.0
   *
   * @see https://www.tapr.org/OHL
   */
  public static readonly TAPR_OHL_1_0 = new SpdxLicense('TAPR-OHL-1.0');

  /**
   * TCL/TK License
   *
   * @see http://www.tcl.tk/software/tcltk/license.html
   */
  public static readonly TCL = new SpdxLicense('TCL');

  /**
   * TCP Wrappers License
   *
   * @see http://rc.quest.com/topics/openssh/license.php#tcpwrappers
   */
  public static readonly TCP_WRAPPERS = new SpdxLicense('TCP-wrappers');

  /**
   * TMate Open Source License
   *
   * @see http://svnkit.com/license.html
   */
  public static readonly TMATE = new SpdxLicense('TMate');

  /**
   * TORQUE v2.5+ Software License v1.1
   *
   * @see https://fedoraproject.org/wiki/Licensing/TORQUEv1.1
   */
  public static readonly TORQUE_1_1 = new SpdxLicense('TORQUE-1.1');

  /**
   * Trusster Open Source License
   *
   * @see https://fedoraproject.org/wiki/Licensing/TOSL
   */
  public static readonly TOSL = new SpdxLicense('TOSL');

  /**
   * Technische Universitaet Berlin License 1.0
   *
   * @see https://github.com/swh/ladspa/blob/7bf6f3799fdba70fda297c2d8fd9f526803d9680/gsm/COPYRIGHT
   */
  public static readonly TU_BERLIN_1_0 = new SpdxLicense('TU-Berlin-1.0');

  /**
   * Technische Universitaet Berlin License 2.0
   *
   * @see https://github.com/CorsixTH/deps/blob/fd339a9f526d1d9c9f01ccf39e438a015da50035/licences/libgsm.txt
   */
  public static readonly TU_BERLIN_2_0 = new SpdxLicense('TU-Berlin-2.0');

  /**
   * Upstream Compatibility License v1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/UCL-1.0
   */
  public static readonly UCL_1_0 = new SpdxLicense('UCL-1.0');

  /**
   * Universal Permissive License v1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/UPL
   */
  public static readonly UPL_1_0 = new SpdxLicense('UPL-1.0');

  /**
   * Unicode License Agreement - Data Files and Software (2015)
   *
   * @see https://web.archive.org/web/20151224134844/http://unicode.org/copyright.html
   */
  public static readonly UNICODE_DFS_2015 = new SpdxLicense('Unicode-DFS-2015');

  /**
   * Unicode License Agreement - Data Files and Software (2016)
   *
   * @osiApproved
   *
   * @see http://www.unicode.org/copyright.html
   */
  public static readonly UNICODE_DFS_2016 = new SpdxLicense('Unicode-DFS-2016');

  /**
   * Unicode Terms of Use
   *
   * @see http://www.unicode.org/copyright.html
   */
  public static readonly UNICODE_TOU = new SpdxLicense('Unicode-TOU');

  /**
   * The Unlicense
   *
   * @osiApproved
   *
   * @see https://unlicense.org/
   */
  public static readonly UNLICENSE = new SpdxLicense('Unlicense');

  /**
   * VOSTROM Public License for Open Source
   *
   * @see https://fedoraproject.org/wiki/Licensing/VOSTROM
   */
  public static readonly VOSTROM = new SpdxLicense('VOSTROM');

  /**
   * Vovida Software License v1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/VSL-1.0
   */
  public static readonly VSL_1_0 = new SpdxLicense('VSL-1.0');

  /**
   * Vim License
   *
   * @see http://vimdoc.sourceforge.net/htmldoc/uganda.html
   */
  public static readonly VIM = new SpdxLicense('Vim');

  /**
   * W3C Software Notice and License (2002-12-31)
   *
   * @osiApproved
   *
   * @see http://www.w3.org/Consortium/Legal/2002/copyright-software-20021231.html
   */
  public static readonly W3_C = new SpdxLicense('W3C');

  /**
   * W3C Software Notice and License (1998-07-20)
   *
   * @see http://www.w3.org/Consortium/Legal/copyright-software-19980720.html
   */
  public static readonly W3C_19980720 = new SpdxLicense('W3C-19980720');

  /**
   * W3C Software Notice and Document License (2015-05-13)
   *
   * @see https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
   */
  public static readonly W3C_20150513 = new SpdxLicense('W3C-20150513');

  /**
   * Do What The F*ck You Want To Public License
   *
   * @see http://www.wtfpl.net/about/
   */
  public static readonly WTFPL = new SpdxLicense('WTFPL');

  /**
   * Sybase Open Watcom Public License 1.0
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Watcom-1.0
   */
  public static readonly WATCOM_1_0 = new SpdxLicense('Watcom-1.0');

  /**
   * Wsuipa License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Wsuipa
   */
  public static readonly WSUIPA = new SpdxLicense('Wsuipa');

  /**
   * X11 License
   *
   * @see http://www.xfree86.org/3.3.6/COPYRIGHT2.html#3
   */
  public static readonly X11 = new SpdxLicense('X11');

  /**
   * XFree86 License 1.1
   *
   * @see http://www.xfree86.org/current/LICENSE4.html
   */
  public static readonly XFREE86_1_1 = new SpdxLicense('XFree86-1.1');

  /**
   * XSkat License
   *
   * @see https://fedoraproject.org/wiki/Licensing/XSkat_License
   */
  public static readonly XSKAT = new SpdxLicense('XSkat');

  /**
   * Xerox License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Xerox
   */
  public static readonly XEROX = new SpdxLicense('Xerox');

  /**
   * X.Net License
   *
   * @osiApproved
   *
   * @see https://opensource.org/licenses/Xnet
   */
  public static readonly XNET = new SpdxLicense('Xnet');

  /**
   * Yahoo! Public License v1.0
   *
   * @see http://www.zimbra.com/license/yahoo_public_license_1.0.html
   */
  public static readonly YPL_1_0 = new SpdxLicense('YPL-1.0');

  /**
   * Yahoo! Public License v1.1
   *
   * @see http://www.zimbra.com/license/yahoo_public_license_1.1.html
   */
  public static readonly YPL_1_1 = new SpdxLicense('YPL-1.1');

  /**
   * Zope Public License 1.1
   *
   * @see http://old.zope.org/Resources/License/ZPL-1.1
   */
  public static readonly ZPL_1_1 = new SpdxLicense('ZPL-1.1');

  /**
   * Zope Public License 2.0
   *
   * @osiApproved
   *
   * @see http://old.zope.org/Resources/License/ZPL-2.0
   */
  public static readonly ZPL_2_0 = new SpdxLicense('ZPL-2.0');

  /**
   * Zope Public License 2.1
   *
   * @see http://old.zope.org/Resources/ZPL/
   */
  public static readonly ZPL_2_1 = new SpdxLicense('ZPL-2.1');

  /**
   * Zed License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Zed
   */
  public static readonly ZED = new SpdxLicense('Zed');

  /**
   * Zend License v2.0
   *
   * @see https://web.archive.org/web/20130517195954/http://www.zend.com/license/2_00.txt
   */
  public static readonly ZEND_2_0 = new SpdxLicense('Zend-2.0');

  /**
   * Zimbra Public License v1.3
   *
   * @see http://web.archive.org/web/20100302225219/http://www.zimbra.com/license/zimbra-public-license-1-3.html
   */
  public static readonly ZIMBRA_1_3 = new SpdxLicense('Zimbra-1.3');

  /**
   * Zimbra Public License v1.4
   *
   * @see http://www.zimbra.com/legal/zimbra-public-license-1-4
   */
  public static readonly ZIMBRA_1_4 = new SpdxLicense('Zimbra-1.4');

  /**
   * zlib License
   *
   * @osiApproved
   *
   * @see http://www.zlib.net/zlib_license.html
   */
  public static readonly ZLIB = new SpdxLicense('Zlib');

  /**
   * SQLite Blessing
   *
   * @see https://www.sqlite.org/src/artifact/e33a4df7e32d742a?ln=4-9
   */
  public static readonly BLESSING = new SpdxLicense('blessing');

  /**
   * bzip2 and libbzip2 License v1.0.5
   *
   * @see https://sourceware.org/bzip2/1.0.5/bzip2-manual-1.0.5.html
   */
  public static readonly BZIP2_1_0_5 = new SpdxLicense('bzip2-1.0.5');

  /**
   * bzip2 and libbzip2 License v1.0.6
   *
   * @see https://sourceware.org/git/?p=bzip2.git;a=blob;f=LICENSE;hb=bzip2-1.0.6
   */
  public static readonly BZIP2_1_0_6 = new SpdxLicense('bzip2-1.0.6');

  /**
   * copyleft-next 0.3.0
   *
   * @see https://github.com/copyleft-next/copyleft-next/blob/master/Releases/copyleft-next-0.3.0
   */
  public static readonly COPYLEFT_NEXT_0_3_0 = new SpdxLicense('copyleft-next-0.3.0');

  /**
   * copyleft-next 0.3.1
   *
   * @see https://github.com/copyleft-next/copyleft-next/blob/master/Releases/copyleft-next-0.3.1
   */
  public static readonly COPYLEFT_NEXT_0_3_1 = new SpdxLicense('copyleft-next-0.3.1');

  /**
   * curl License
   *
   * @see https://github.com/bagder/curl/blob/master/COPYING
   */
  public static readonly CURL = new SpdxLicense('curl');

  /**
   * diffmark license
   *
   * @see https://fedoraproject.org/wiki/Licensing/diffmark
   */
  public static readonly DIFFMARK = new SpdxLicense('diffmark');

  /**
   * dvipdfm License
   *
   * @see https://fedoraproject.org/wiki/Licensing/dvipdfm
   */
  public static readonly DVIPDFM = new SpdxLicense('dvipdfm');

  /**
   * eCos license version 2.0
   *
   * @see https://www.gnu.org/licenses/ecos-license.html
   */
  public static readonly ECOS_2_0 = new SpdxLicense('eCos-2.0');

  /**
   * eGenix.com Public License 1.1.0
   *
   * @see http://www.egenix.com/products/eGenix.com-Public-License-1.1.0.pdf
   */
  public static readonly E_GENIX = new SpdxLicense('eGenix');

  /**
   * Etalab Open License 2.0
   *
   * @see https://github.com/DISIC/politique-de-contribution-open-source/blob/master/LICENSE.pdf
   */
  public static readonly ETALAB_2_0 = new SpdxLicense('etalab-2.0');

  /**
   * gSOAP Public License v1.3b
   *
   * @see http://www.cs.fsu.edu/~engelen/license.html
   */
  public static readonly GSOAP_1_3B = new SpdxLicense('gSOAP-1.3b');

  /**
   * gnuplot License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Gnuplot
   */
  public static readonly GNUPLOT = new SpdxLicense('gnuplot');

  /**
   * iMatix Standard Function Library Agreement
   *
   * @see http://legacy.imatix.com/html/sfl/sfl4.htm#license
   */
  public static readonly I_MATIX = new SpdxLicense('iMatix');

  /**
   * PNG Reference Library version 2
   *
   * @see http://www.libpng.org/pub/png/src/libpng-LICENSE.txt
   */
  public static readonly LIBPNG_2_0 = new SpdxLicense('libpng-2.0');

  /**
   * libselinux public domain notice
   *
   * @see https://github.com/SELinuxProject/selinux/blob/master/libselinux/LICENSE
   */
  public static readonly LIBSELINUX_1_0 = new SpdxLicense('libselinux-1.0');

  /**
   * libtiff License
   *
   * @see https://fedoraproject.org/wiki/Licensing/libtiff
   */
  public static readonly LIBTIFF = new SpdxLicense('libtiff');

  /**
   * mpich2 License
   *
   * @see https://fedoraproject.org/wiki/Licensing/MIT
   */
  public static readonly MPICH2 = new SpdxLicense('mpich2');

  /**
   * psfrag License
   *
   * @see https://fedoraproject.org/wiki/Licensing/psfrag
   */
  public static readonly PSFRAG = new SpdxLicense('psfrag');

  /**
   * psutils License
   *
   * @see https://fedoraproject.org/wiki/Licensing/psutils
   */
  public static readonly PSUTILS = new SpdxLicense('psutils');

  /**
   * wxWindows Library License
   *
   * @see https://opensource.org/licenses/WXwindows
   */
  public static readonly WX_WINDOWS = new SpdxLicense('wxWindows');

  /**
   * xinetd License
   *
   * @see https://fedoraproject.org/wiki/Licensing/Xinetd_License
   */
  public static readonly XINETD = new SpdxLicense('xinetd');

  /**
   * XPP License
   *
   * @see https://fedoraproject.org/wiki/Licensing/xpp
   */
  public static readonly XPP = new SpdxLicense('xpp');

  /**
   * zlib/libpng License with Acknowledgement
   *
   * @see https://fedoraproject.org/wiki/Licensing/ZlibWithAcknowledgement
   */
  public static readonly ZLIB_ACKNOWLEDGEMENT = new SpdxLicense('zlib-acknowledgement');

  /** Packages that have not been licensed */
  public static readonly UNLICENSED = new SpdxLicense('UNLICENSED');
  //#endregion

  //#region Bundles of SPDX Licenses

  /** All valid SPDX Licenses */
  public static all(): SpdxLicense[] {
    return Array.from(SpdxLicense._ALL.values());
  }

  /** All OSI-Approved SPDX Licenses */
  public static osiApproved(): SpdxLicense[] {
    return [
      SpdxLicense.ZERO_BSD,
      SpdxLicense.AAL,
      SpdxLicense.AFL_1_1,
      SpdxLicense.AFL_1_2,
      SpdxLicense.AFL_2_0,
      SpdxLicense.AFL_2_1,
      SpdxLicense.AFL_3_0,
      SpdxLicense.AGPL_3_0,
      SpdxLicense.AGPL_3_0_ONLY,
      SpdxLicense.AGPL_3_0_OR_LATER,
      SpdxLicense.APL_1_0,
      SpdxLicense.APSL_1_0,
      SpdxLicense.APSL_1_1,
      SpdxLicense.APSL_1_2,
      SpdxLicense.APSL_2_0,
      SpdxLicense.APACHE_1_1,
      SpdxLicense.APACHE_2_0,
      SpdxLicense.ARTISTIC_1_0,
      SpdxLicense.ARTISTIC_1_0_PERL,
      SpdxLicense.ARTISTIC_1_0_CL8,
      SpdxLicense.ARTISTIC_2_0,
      SpdxLicense.BSD_1_CLAUSE,
      SpdxLicense.BSD_2_CLAUSE,
      SpdxLicense.BSD_2_CLAUSE_PATENT,
      SpdxLicense.BSD_3_CLAUSE,
      SpdxLicense.BSD_3_CLAUSE_LBNL,
      SpdxLicense.BSL_1_0,
      SpdxLicense.CAL_1_0,
      SpdxLicense.CAL_1_0_COMBINED_WORK_EXCEPTION,
      SpdxLicense.CATOSL_1_1,
      SpdxLicense.CDDL_1_0,
      SpdxLicense.CECILL_2_1,
      SpdxLicense.CNRI_PYTHON,
      SpdxLicense.CPAL_1_0,
      SpdxLicense.CPL_1_0,
      SpdxLicense.CUA_OPL_1_0,
      SpdxLicense.ECL_1_0,
      SpdxLicense.ECL_2_0,
      SpdxLicense.EFL_1_0,
      SpdxLicense.EFL_2_0,
      SpdxLicense.EPL_1_0,
      SpdxLicense.EPL_2_0,
      SpdxLicense.EUDATAGRID,
      SpdxLicense.EUPL_1_1,
      SpdxLicense.EUPL_1_2,
      SpdxLicense.ENTESSA,
      SpdxLicense.FAIR,
      SpdxLicense.FRAMEWORX_1_0,
      SpdxLicense.GPL_2_0,
      SpdxLicense.GPL_2_0_PLUS,
      SpdxLicense.GPL_2_0_ONLY,
      SpdxLicense.GPL_2_0_OR_LATER,
      SpdxLicense.GPL_3_0,
      SpdxLicense.GPL_3_0_PLUS,
      SpdxLicense.GPL_3_0_ONLY,
      SpdxLicense.GPL_3_0_OR_LATER,
      SpdxLicense.GPL_3_0_WITH_GCC_EXCEPTION,
      SpdxLicense.HPND,
      SpdxLicense.IPA,
      SpdxLicense.IPL_1_0,
      SpdxLicense.ISC,
      SpdxLicense.INTEL,
      SpdxLicense.LGPL_2_0,
      SpdxLicense.LGPL_2_0_PLUS,
      SpdxLicense.LGPL_2_0_ONLY,
      SpdxLicense.LGPL_2_0_OR_LATER,
      SpdxLicense.LGPL_2_1,
      SpdxLicense.LGPL_2_1_PLUS,
      SpdxLicense.LGPL_2_1_ONLY,
      SpdxLicense.LGPL_2_1_OR_LATER,
      SpdxLicense.LGPL_3_0,
      SpdxLicense.LGPL_3_0_PLUS,
      SpdxLicense.LGPL_3_0_ONLY,
      SpdxLicense.LGPL_3_0_OR_LATER,
      SpdxLicense.LPL_1_0,
      SpdxLicense.LPL_1_02,
      SpdxLicense.LPPL_1_3C,
      SpdxLicense.LILIQ_P_1_1,
      SpdxLicense.LILIQ_R_1_1,
      SpdxLicense.LILIQ_RPLUS_1_1,
      SpdxLicense.MIT,
      SpdxLicense.MIT_0,
      SpdxLicense.MPL_1_0,
      SpdxLicense.MPL_1_1,
      SpdxLicense.MPL_2_0,
      SpdxLicense.MPL_2_0_NO_COPYLEFT_EXCEPTION,
      SpdxLicense.MS_PL,
      SpdxLicense.MS_RL,
      SpdxLicense.MIR_O_S,
      SpdxLicense.MOTOSOTO,
      SpdxLicense.MULANPSL_2_0,
      SpdxLicense.MULTICS,
      SpdxLicense.NASA_1_3,
      SpdxLicense.NCSA,
      SpdxLicense.NGPL,
      SpdxLicense.NPOSL_3_0,
      SpdxLicense.NTP,
      SpdxLicense.NAUMEN,
      SpdxLicense.NOKIA,
      SpdxLicense.OCLC_2_0,
      SpdxLicense.OFL_1_1,
      SpdxLicense.OFL_1_1_RFN,
      SpdxLicense.OFL_1_1_NO_RFN,
      SpdxLicense.OGTSL,
      SpdxLicense.OLDAP_2_8,
      SpdxLicense.OSET_PL_2_1,
      SpdxLicense.OSL_1_0,
      SpdxLicense.OSL_2_0,
      SpdxLicense.OSL_2_1,
      SpdxLicense.OSL_3_0,
      SpdxLicense.PHP_3_0,
      SpdxLicense.PHP_3_01,
      SpdxLicense.POSTGRE_SQ_L,
      SpdxLicense.PYTHON_2_0,
      SpdxLicense.QPL_1_0,
      SpdxLicense.RPL_1_1,
      SpdxLicense.RPL_1_5,
      SpdxLicense.RPSL_1_0,
      SpdxLicense.RSCPL,
      SpdxLicense.SISSL,
      SpdxLicense.SPL_1_0,
      SpdxLicense.SIMPL_2_0,
      SpdxLicense.SLEEPYCAT,
      SpdxLicense.UCL_1_0,
      SpdxLicense.UPL_1_0,
      SpdxLicense.UNICODE_DFS_2016,
      SpdxLicense.UNLICENSE,
      SpdxLicense.VSL_1_0,
      SpdxLicense.W3_C,
      SpdxLicense.WATCOM_1_0,
      SpdxLicense.XNET,
      SpdxLicense.ZPL_2_0,
      SpdxLicense.ZLIB,
    ];
  }

  /** The Apache family of licenses */
  public static apache(): SpdxLicense[] {
    return [
      SpdxLicense.APACHE_1_0,
      SpdxLicense.APACHE_1_1,
      SpdxLicense.APACHE_2_0,
    ];
  }

  /** The BSD family of licenses */
  public static bsd(): SpdxLicense[] {
    return [
      SpdxLicense.ZERO_BSD,
      SpdxLicense.BSD_1_CLAUSE,
      SpdxLicense.BSD_2_CLAUSE,
      SpdxLicense.BSD_2_CLAUSE_FREEBSD,
      SpdxLicense.BSD_2_CLAUSE_NETBSD,
      SpdxLicense.BSD_2_CLAUSE_PATENT,
      SpdxLicense.BSD_2_CLAUSE_VIEWS,
      SpdxLicense.BSD_3_CLAUSE,
      SpdxLicense.BSD_3_CLAUSE_ATTRIBUTION,
      SpdxLicense.BSD_3_CLAUSE_CLEAR,
      SpdxLicense.BSD_3_CLAUSE_LBNL,
      SpdxLicense.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE,
      SpdxLicense.BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014,
      SpdxLicense.BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY,
      SpdxLicense.BSD_3_CLAUSE_OPEN_MPI,
      SpdxLicense.BSD_4_CLAUSE,
      SpdxLicense.BSD_4_CLAUSE_UC,
      SpdxLicense.BSD_PROTECTION,
      SpdxLicense.BSD_SOURCE_CODE,
    ];
  }

  /** The CDDL family of licenses */
  public static cddl(): SpdxLicense[] {
    return [
      SpdxLicense.CDDL_1_0,
      SpdxLicense.CDDL_1_1,
    ];
  }

  /** The EPL family of licenses */
  public static epl(): SpdxLicense[] {
    return [
      SpdxLicense.EPL_1_0,
      SpdxLicense.EPL_2_0,
    ];
  }

  /** The MIT family of licenses */
  public static mit(): SpdxLicense[] {
    return [
      SpdxLicense.AML,
      SpdxLicense.MIT,
      SpdxLicense.MIT_0,
      SpdxLicense.MIT_CMU,
      SpdxLicense.MIT_ADVERTISING,
      SpdxLicense.MIT_ENNA,
      SpdxLicense.MIT_FEH,
      SpdxLicense.MIT_OPEN_GROUP,
      SpdxLicense.MITNFA,
    ];
  }

  /** The MPL family of licenses */
  public static mpl(): SpdxLicense[] {
    return [
      SpdxLicense.MPL_1_0,
      SpdxLicense.MPL_1_1,
      SpdxLicense.MPL_2_0,
      SpdxLicense.MPL_2_0_NO_COPYLEFT_EXCEPTION,
    ];
  }
  //#endregion

  private constructor(public readonly id: string) {
    /* istanbul ignore if (should never happen) */
    if (SpdxLicense._ALL.has(id)) {
      throw new Error(`Duplicated SPDX License ID: ${id}`);
    }
    SpdxLicense._ALL.set(id, this);
  }
}