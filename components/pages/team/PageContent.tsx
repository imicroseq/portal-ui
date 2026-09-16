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

import WhySequence from '#components/pages/about/WhySequence';

import IMicroSeqTeam from './iMicroSeq';
import VirusSeqTeam from './VirusSeq';

const PageContent = (): ReactElement => {
	const theme = useTheme();

	return (
		<main
			css={css`
				align-items: center;
				display: flex;
				flex-direction: column;
				padding-bottom: 30px;
			`}
		>
			<article
				css={css`
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					margin: 30px 0;
					max-width: 800px;
					padding: 40px;
					width: 100%;
					${theme.shadow.default};
				`}
			>
				<h1
					css={css`
						color: ${theme.colors.primary};
						font-size: 26px;
						font-weight: normal;
						margin: 0;
					`}
				>
					About iMicroSeq
				</h1>

				<p
					css={css`
						font-style: italic;
						margin-top: 10px 0 0;
					`}
				>
					A Made-in-Canada Data Solution
				</p>

				<p>
					iMicroSeq supports the collaboration and engagement of eDNA monitoring efforts across Canada, with
					the goal of addressing data silos that exist in this space. One of the primary goals of iMicroSeq is
					the development of the iMicroSeq Data Portal as a tool to enhance data sharing and enable
					integrative analyses. The Canadian iMicroSeq Data Portal manages and facilitates data sharing of
					Canadian water-based environmental monitoring nucleotide sequencing data, qPCR data, and contextual
					data alongside clinical case-based data (currently SARS-CoV-2) among researchers, Canadian public
					health laboratories, and other groups interested in One Health and accessing the data for research
					and innovation purposes. We are committed to 1) providing data that adheres to FAIR principles, 2)
					ensuring that data generators are recognized for their contributions, 3) transparent data governance
					and 4) respecting Indigenous data sovereignty (including Principles of OCAP&reg;, Métis Principles).
				</p>
				<WhySequence />

				{/* <IMicroSeqIntro /> */}
				<IMicroSeqTeam />
				<VirusSeqTeam />
			</article>
		</main>
	);
};

export default PageContent;
