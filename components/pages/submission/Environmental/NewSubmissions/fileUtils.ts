/*
 *
 * Copyright (c) 2025 The Ontario Institute for Cancer Research. All rights reserved
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

import { md5 } from 'js-md5';

import type { SubmissionFile } from './types';

/**
 * Computes the MD5 hash of a given file.
 * @param file - The original file for which to compute the MD5 hash.
 * @returns A promise that resolves to the file object with an added `md5` property
 * @throws Will reject the promise if there's an error reading the file.
 */
export const computeMd5 = (file: SubmissionFile): Promise<SubmissionFile> =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onabort = () => reject(new Error(`Reading aborted for file: ${file.name}`));
		reader.onerror = () => reject(new Error(`Error reading file: ${file.name}`));
		reader.onload = () => {
			const binaryData = reader.result as ArrayBuffer;
			const calculatedMd5 = md5(binaryData);
			file.md5 = calculatedMd5;
			resolve(file);
		};

		reader.readAsArrayBuffer(file);
	});
