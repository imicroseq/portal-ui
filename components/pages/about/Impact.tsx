/*
 *
 * Copyright (c) 2022 The Ontario Institute for Cancer Research. All rights reserved
 *
 *  This program and the accompanying materials are made available under the terms of
 *  the GNU Affero General Public License v3.0. You should have received a copy of the
 *  GNU Affero General Public License along with this program.
 *   If not, see <http://www.gnu.org/licenses/>.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 *  SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 *  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 *  OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 *  IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 *  ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

import { css, useTheme } from '@emotion/react';
import { ReactElement } from 'react';

const Impact = (): ReactElement => {
	const theme = useTheme();
	return (
		<section
			className="Impact"
			css={css`
				> * {
					margin: 25px 0;
				}
			`}
		>
			<h2
				css={css`
					color: ${theme.colors.primary};
					font-size: 26px;
					font-weight: normal;
					position: relative;
				`}
			>
				What iMicroseq provides
			</h2>
			<ul>
				<li>
					Infrastructure for sharing of water-based environmental monitoring bacterial and viral sequence
					data, qPCR data and associated contextual data alongside select clinical case-based data
					(VirusSeq/SARS-CoV-2).
				</li>
				<li>Canadian sovereign data storage.</li>
				<li>
					A transparent data governance framework that supports FAIR data sharing, with recognition of data
					providers, and is striving for OCAP® compliance with community consultation.
				</li>
				<li>Tools being tailored to explore the data and serve the needs of the research community.</li>
			</ul>
			<h2
				css={css`
					color: ${theme.colors.primary};
					font-size: 26px;
					font-weight: normal;
					position: relative;
				`}
			>
				What iMicroSeq Enables
			</h2>
			<ul>
				<li>Data discovery, uniting data in Canada into a standardized, searchable resource.</li>
				<li>More wholistic analyses of data from diverse sources, breaking down data silos.</li>
				<li>
					Integration with, and extending, data from other resources (e.g. GenBank, ENA), via the use of
					powerful data specifications and interchange formats.
				</li>
				<li>
					Supporting: Detection, source attribution, surveillance, risk assessment, and control strategies for
					microbes and antimicrobial resistance - bolstering sectors as diverse as public health, agriculture,
					aquaculture, and mining.
				</li>
			</ul>
		</section>
	);
};

export default Impact;
